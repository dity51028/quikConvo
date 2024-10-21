import React, { useState } from 'react'
import avatar from '../assets/avatar.png'
import { IoCallOutline,IoVideocamOutline,IoInformationCircleOutline,IoCameraOutline,IoImageOutline,IoMicOutline  } from "react-icons/io5";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';



const Chat = () => {

  const [open,setOpen] = useState(false)
  const [text,setText] = useState('')

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

      <div className="center">
        <h1>center</h1>

      </div>

      <div className="bottom flex gap-2 justify-between items-center mr-3 ">
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