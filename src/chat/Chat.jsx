import React, { useEffect, useState,useRef } from 'react'
import avatar from '../assets/avatar.png'
import { IoCallOutline,IoVideocamOutline,IoInformationCircleOutline,IoCameraOutline,IoImageOutline,IoMicOutline  } from "react-icons/io5";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useChatStore } from '../lib/chatStore';
import { useUserStore } from '../lib/userStore';
import upload from '../lib/upload';
import { useOutletContext } from 'react-router-dom';
import Detail from '../detail/Detail';



const Chat = () => {

  const [open,setOpen] = useState(false);
  const [chats,setChats] = useState([]);
  const [text,setText] = useState('');
  const [showDetails,setshowDetails] = useState(false)
  const [img, setimg] = useState({
    file:null,
    url:"",
  });

  const {chatId} = useOutletContext();

  const { currentUser} = useUserStore();
  const { user,isCurrentUserBlocked,isreceiverBlocked } = useChatStore();

  const endRef = useRef(null);

  useEffect(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);
  
  useEffect(()=>{
    const unSub = onSnapshot(doc(db,'chats',chatId),(res)=>{
      setChats(res.data())

    })
    return ()=>{
      unSub();
    }
  },[chatId]);

  

  const handleEmoji = e =>{
    setText((prev) => prev+e.emoji)
  }

  const handleimg = e =>{
    if(e.target.files[0]){
      setimg({
        file:e.target.files[0],
        url:URL.createObjectURL(e.target.files[0])
      })
    }
   
  }

 
   const handleSent = async() =>{
     if(text==='') return;

     let imgUrl = null;

     try{
       if(img.file){
        imgUrl = await upload(img.file);
       }
        await updateDoc(doc(db,"chats",chatId),{
          messages:arrayUnion({
            senderId : currentUser.id,
            text,
            createdAt:new Date(),
            ...(imgUrl && {img:imgUrl}),
          }),
        });


        const userIDs = [currentUser.id,user.id];

        userIDs.forEach(async(id)=>{
          const userChatRef = doc(db,'userChat',id);
          const userChatsSnapshot = await getDoc(userChatRef);
  
  
          if(userChatsSnapshot.exists()){
            const userChatData = userChatsSnapshot.data()
            const chatIndex = userChatData.chats.findIndex(c=>c.chatId === chatId)
  
            userChatData.chats[chatIndex].lastMessage = text;
            userChatData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
            userChatData.chats[chatIndex].updatedAt = Date.now();
  
            await updateDoc(userChatRef,{
              chats:userChatData.chats
            });
  
          }

        });

       

     }catch(err){
      console.log(err)
     }

     setimg({
      file:null,
      url:"",
     });

     setText("");
   }


  
  return (
    <div className='flex items-center h-full w-full'>
      <div className='w-full h-full overflow-hidden'>
    <div className='chat h-[100%] flex flex-col flex-grow-[2] border-l border-r border-gray-400 ml-2 pl-4'>
      <div className="top flex justify-between items-center border-b border-gray-400 py-2">
        <div className="user flex gap-2 ">
          <img src={user?.avatar || avatar} alt="" className='rounded-full h-14 w-14 ' onClick={()=>setshowDetails(true)}/>
          <div className="texts  ">
            <span className='text-md font-bold'>{user?.Username || "User"}</span>
            <p className='text-sm text-gray-300'>Lorem ipsum,sit ameret</p>
          </div>
        </div>

        <div className="icons text-2xl flex gap-3 mr-3 cursor-pointer">
          <IoCallOutline/>
          <IoVideocamOutline/>
          <IoInformationCircleOutline/>

        </div>

      </div>

      <div className="center border-b border-gray-400 flex flex-col flex-1 p-5 gap-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-transparent">
        {chats?.messages?.map((message) => {
    return (
      <div
        key={message?.createdAt}
        className={message.senderId === currentUser?.id ? "message-own flex justify-end w-full" : "message flex gap-2 w-[70%]"}
      >
        {!message.senderId === currentUser?.id && (
          <img src={avatar} alt="avatar" className="rounded-full h-10 w-10" />
        )}
        <div className={`${message.senderId === currentUser?.id ? "bg-blue-950 text-slate-200" : "bg-slate-200 text-blue-950"} rounded-xl p-3`}>
          <p>{message.text}</p>
          {message.img && <img src={message.img} alt="" />}
        </div>
      </div>
    );
  })}

{img.url && (
  <div
    className={img.userId === currentUser?.id ? "message-own flex justify-end w-full" : "message flex w-[70%]"}
  >  
    <div className={`${img.userId === currentUser?.id ? "text-slate-200 bg-blue-950" : "bg-slate-200 text-blue-950"} rounded-xl p-3 w-[60%]`}>
      <img src={img.url} alt="" />
    </div>
  </div>
)}

  <div ref={endRef}></div>
</div>


      <div className="bottom flex gap-2 justify-between items-center mr-3  mt-4">
            <div className="icons flex gap-2 text-xl cursor-pointer">
              <div>
              <label htmlFor="file">'
              <IoImageOutline className=' cursor-pointer'/>
              </label>
               <input type="file" id="file" style={{display:'none'}} onChange={handleimg}/>
              </div>
              
                  <IoCameraOutline/>
                  <IoMicOutline/>
            </div>
              <input type="text" placeholder={(isCurrentUserBlocked || isreceiverBlocked) ? "You cannot sent a message":'Type Your Message...' }
              onChange={(e)=>setText(e.target.value)}
              value={text}
              disabled={isCurrentUserBlocked || isreceiverBlocked}
              className='flex flex-1 bg-blue-950/50 h-10 rounded-lg p-2 outline-none disabled:cursor-not-allowed '/>

           

            <div className="emoji flex gap-3 text-xl relative">
              
                  <BsEmojiSmileFill onClick={()=>setOpen(prev=>!prev)} className='cursor-pointer '/>
                  <div className="picker absolute bottom-[50px] left-0">
                  <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                  </div>
                  
                  <button className='text-white text-2xl disabled:cursor-not-allowed' 
                  onClick={handleSent}
                  disabled={isCurrentUserBlocked || isreceiverBlocked}
                  ><BsFillSendFill/></button>
            </div>

      </div>
    </div>
    </div>
    {showDetails && <Detail/>}
    </div>
  )
}

export default Chat