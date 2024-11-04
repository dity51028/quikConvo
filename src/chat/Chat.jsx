import React, { useEffect, useState,useRef } from 'react'
import avatar from '../assets/avatar.png'
import { IoCallOutline,IoVideocamOutline,IoInformationCircleOutline,IoCameraOutline,IoImageOutline,IoMicOutline  } from "react-icons/io5";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';



const Chat = () => {

  const [open,setOpen] = useState(false)
  const [chats,setChats] = useState([])
  const [text,setText] = useState('')

  const endRef = useRef(null);

  useEffect(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);
  
  useEffect(()=>{
    const unSub = onSnapshot(doc(db,'chats','LI2YEsPj38DOIltit92E'),(res)=>{
      setChats(res.data())

    })


    return ()=>{
      unSub();
    }
  },[]);

  console.log(chats);

  const handleEmoji = e =>{
    setText((prev) => prev+e.emoji)
  }

  console.log(text);
  return (
    <div className='chat h-[100%] flex flex-col flex-grow-[2] border-l border-r border-gray-400 ml-2 pl-4'>
      <div className="top flex justify-between items-center border-b border-gray-400 py-2">
        <div className="user flex gap-2 ">
          <img src={avatar} alt="" className='rounded-full h-14 w-14 '/>
          <div className="texts  ">
            <span className='text-md font-bold'>John Doe</span>
            <p className='text-sm text-gray-300'>Lorem ipsum,sit ameret</p>
          </div>
        </div>

        <div className="icons text-2xl flex gap-3 mr-3 cursor-pointer">
          <IoCallOutline/>
          <IoVideocamOutline/>
          <IoInformationCircleOutline/>

        </div>

      </div>

      <div className="center border-b border-gray-400 flex flex-col flex-1 p-5 gap-4 overflow-y-scroll scrollbar-thin  scrollbar-thumb-blue-950 scrollbar-track-transparent">
       
      <div className="message flex gap-2 w-[70%]">
          <img src={avatar} alt="avtar" className='rounded-full h-10 w-10'/>
          <div className='bg-slate-200 text-blue-950 rounded-xl p-3'>
          <p > hii, sir
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>
        </div>

        <div className="message-own flex justify-end w-full">
          
        <div className='text-slate-200 bg-blue-950 rounded-xl p-3 w-[60%]' >
          <p > hello, ma'am
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div> 
                  
        </div>
       
        <div className="message flex gap-2 w-[70%]">
          <img src={avatar} alt="avtar" className='rounded-full h-10 w-10'/>
          <div className='bg-slate-200 text-blue-950 rounded-xl p-3'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem nihil fugiat aut est! Error quisquam 
          unde ducimus accusamus quis cupiditate aspernatur delectus obcaecati, fugit temporibus possimus repellendus. Vitae, sapiente?
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>
        </div>

        <div className="message-own flex justify-end w-full">
          
        <div className='text-slate-200 bg-blue-950 rounded-xl p-3 w-[60%]' >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem nihil fugiat aut est! Error quisquam 
          unde ducimus accusamus quis cupiditate aspernatur delectus obcaecati, fugit temporibus possimus repellendus. Vitae, sapiente?
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>          
        </div>

        <div className="message flex gap-2 w-[70%]">
          <img src={avatar} alt="avtar" className='rounded-full h-10 w-10'/>
          <div className='bg-slate-200 text-blue-950 rounded-xl p-3'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem nihil fugiat aut est! Error quisquam 
          unde ducimus accusamus quis cupiditate aspernatur delectus obcaecati, fugit temporibus possimus repellendus. Vitae, sapiente?
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>
        </div>

        <div className="message-own flex justify-end w-full">
          
        <div className='text-slate-200 bg-blue-950 rounded-xl p-3 w-[60%]' >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem nihil fugiat aut est! Error quisquam 
          unde ducimus accusamus quis cupiditate aspernatur delectus obcaecati, fugit temporibus possimus repellendus. Vitae, sapiente?
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>          
        </div>

        <div className="message flex gap-2 w-[70%]">
          <img src={avatar} alt="avtar" className='rounded-full h-10 w-10'/>
          <div className='bg-slate-200 text-blue-950 rounded-xl p-3'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem nihil fugiat aut est! Error quisquam 
          unde ducimus accusamus quis cupiditate aspernatur delectus obcaecati, fugit temporibus possimus repellendus. Vitae, sapiente?
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>
        </div>

        <div className="message-own flex justify-end w-full">
          
        <div className='text-slate-200 bg-blue-950 rounded-xl p-3 w-[60%]' >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem nihil fugiat aut est! Error quisquam 
          unde ducimus accusamus quis cupiditate aspernatur delectus obcaecati, fugit temporibus possimus repellendus. Vitae, sapiente?
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>          
        </div>

        <div className="message flex gap-2 w-[70%]">
          <img src={avatar} alt="avtar" className='rounded-full h-10 w-10'/>
          <div className='bg-slate-200 text-blue-950 rounded-xl p-3'>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem nihil fugiat aut est! Error quisquam 
          unde ducimus accusamus quis cupiditate aspernatur delectus obcaecati, fugit temporibus possimus repellendus. Vitae, sapiente?
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>
        </div>

        <div className="message-own flex justify-end w-full">
          
        <div className='text-slate-200 bg-blue-950 rounded-xl p-3 w-[60%]' >
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem nihil fugiat aut est! Error quisquam 
          unde ducimus accusamus quis cupiditate aspernatur delectus obcaecati, fugit temporibus possimus repellendus. Vitae, sapiente?
          </p>
          <span className='text-xs flex float-end'>11.11 am</span>
          </div>          
        </div>

      </div>

      <div className="bottom flex gap-2 justify-between items-center mr-3  mt-4">
            <div className="icons flex gap-2 text-xl cursor-pointer">
                  <IoImageOutline/>
                  <IoCameraOutline/>
                  <IoMicOutline/>
            </div>

           
              <input type="text" placeholder='Type Your Text Here...' 
              onChange={(e)=>setText(e.target.value)}
              value={text}
              className='flex flex-1 bg-blue-950/50 h-10 rounded-lg p-2 outline-none '/>

           

            <div className="emoji flex gap-3 text-xl relative">
              
                  <BsEmojiSmileFill onClick={()=>setOpen(prev=>!prev)} className='cursor-pointer '/>
                  <div className="picker absolute bottom-[50px] left-0">
                  <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                  </div>
                  
                  <button className='text-blue-950 text-2xl'><BsFillSendFill/></button>
            </div>

      </div>
    </div>
  )
}

export default Chat