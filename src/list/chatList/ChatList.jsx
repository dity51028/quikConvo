import React, { useState } from 'react'
import { FaSearch,FaPlus } from "react-icons/fa";
import { FiPlusCircle,FiMinusCircle } from "react-icons/fi";
import avatar from '../../assets/avatar.png'


const ChatList = () => {
    const [addMode,setAddMode]=useState(true)
  return (
    <div>
        <div className="chatlist mt-6 flex flex-col flex-1 overflow-scroll ">
            <div className="search flex justify-between items-center gap-5">
                <div className="searchBar flex  bg-blue-950/50 h-10 items-center ml-6 p-4 gap-2 rounded-lg ">
                    <FaSearch/>
                    <input type="search" placeholder='search' className='bg-transparent outline-none'/>
                </div>


                {
                    addMode ?(<FiPlusCircle className='mr-5 cursor-pointer'  onClick={() => setAddMode(prev => !prev)}  size={28}/>):
                    (<FiMinusCircle className='mr-5 cursor-pointer'  onClick={() => setAddMode(prev => !prev)}  size={28}/>)
                    
                }
                
            </div>

            <div className='chatItems  mt-4 px-6'>

            <div className="item flex items-center m-6 py-2 gap-4 border-b-2 border-gray-400">
                    <img src={avatar} alt="avatar" />
                    <div className='text'>
                        <h2>John Doe</h2>
                        <p>Hello world</p>
                    </div>
                </div>

                <div className="item flex items-center m-6 gap-4">
                    <img src={avatar} alt="avatar" />
                    <div className='text'>
                        <h2>John Doe</h2>
                        <p>Hello world</p>
                    </div>
                </div>
                
                <div className="item flex items-center m-6 gap-4">
                    <img src={avatar} alt="avatar" />
                    <div className='text'>
                        <h2>John Doe</h2>
                        <p>Hello world</p>
                    </div>
                </div>
                
                <div className="item flex items-center m-6 gap-4">
                    <img src={avatar} alt="avatar" />
                    <div className='text'>
                        <h2>John Doe</h2>
                        <p>Hello world</p>
                    </div>
                </div>
                <div className="item flex items-center m-6 gap-4">
                    <img src={avatar} alt="avatar" />
                    <div className='text'>
                        <h2>John Doe</h2>
                        <p>Hello world</p>
                    </div>
                </div>
                </div>
                
        </div>
    </div>
  )
}

export default ChatList