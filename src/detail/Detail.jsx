import React from 'react'
import avatar from '../assets/avatar.png'
import { FaChevronCircleUp,FaChevronCircleDown } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import photo from  '../assets/photo.jpeg'
import { auth, db } from '../lib/firebase';
import { useChatStore } from '../lib/chatStore';
import { useUserStore } from '../lib/userStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';


const Detail = () => {

  const {chatId,user,isCurrentUserBlocked,isreceiverBlocked,changeBlock} = useChatStore();
  const {currentUser} = useUserStore();

  const handleBlock =async ()=>{

    if(!user) return;

    const userDocRef = doc(db,'users',currentUser.id)
    try{
      await updateDoc(userDocRef,{
        blockList : isreceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id)
      });
      changeBlock()

    }catch(err){
      console.log(err);
    }

  }
  return (
    <div className='detail flex flex-col flex-1 gap-2 '>
      <div className="top flex flex-col items-center  text-center border-b border-gray-400 pb-6">
        <img src={user?.avatar || avatar} alt="" className='rounded-full w-20 h-20' />
        <h1 className='text-lg font-bold p-2'>{user?.Username || "User"}</h1>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      <div className="bottom ml-2">
           <div className="options">
            <div className="chat flex my-5  justify-between items-center cursor-pointer">
              <h4 className=''>Chat Settings</h4>
              <FaChevronCircleUp className='text-gray-800 '/>
            </div>
            <div className="privacy my-5 flex justify-between items-center cursor-pointer">
              <h4 className=''>Privacy & help</h4>
              <FaChevronCircleUp className='text-gray-800 '/>
            </div>

            <div className="photo my-5 flex justify-between items-center cursor-pointer">
              <h4 className=''>Shared Photos</h4>
              <FaChevronCircleDown className='text-gray-800 '/>
            </div>
            <div className="shared-photos my-4 flex justify-between  items-center gap-16">
              <div className='flex justify-between gap-4'>
                <img src={photo} alt="" height={24} width={24}/>
                <h1>photo_2024_1.png</h1>
              </div>
              <IoMdDownload/>
            </div>
            <div className="shared-photos my-4 flex justify-between  items-center gap-16">
              <div className='flex justify-between gap-4'>
                <img src={photo} alt="" height={24} width={24}/>
                <h1>photo_2024_1.png</h1>
              </div>
              <IoMdDownload/>
            </div>
            <div className="shared-photos my-4 flex justify-between  items-center gap-16">
              <div className='flex justify-between gap-4'>
                <img src={photo} alt="" height={24} width={24}/>
                <h1>photo_2024_1.png</h1>
              </div>
              <IoMdDownload/>
            </div>
            <div className="shared-photos my-4 flex justify-between  items-center gap-16">
              <div className='flex justify-between gap-4'>
                <img src={photo} alt="" height={24} width={24}/>
                <h1>photo_2024_1.png</h1>
              </div>
              <IoMdDownload/>
            </div>

            <div className="files flex my-5  justify-between items-center cursor-pointer">
              <h4 className=''>Shared files</h4>
              <FaChevronCircleUp className='text-gray-800 '/>
            </div>
      </div>
      <div className="buttons flex flex-col gap-4 absolute bottom-12 ml-10 ">
      <button className='bg-red-400 hover:bg-red-600 px-14 py-2 ' onClick={handleBlock}>
        {
          isCurrentUserBlocked? "Blocked" : isreceiverBlocked ? 'User Blocked' : "Block"
        }
      </button>
      <button className='bg-slate-300 text-black hover:bg-white  px-14 py-2' onClick={()=>auth.signOut()}>Log Out</button>
      </div>
      

    </div>
    </div>
  )
}

export default Detail