import React, { useState } from 'react'
import { FaSearch,FaPlus } from "react-icons/fa";
import { FiPlusCircle,FiMinusCircle } from "react-icons/fi";
import avatar from '../../assets/avatar.png'
import AddUser from './addUser/AddUser';


const ChatList = () => {
    const [addMode,setAddMode]=useState(false)
  return (
    
        <div className="chatlist mt-6 flex flex-col flex-1 overflow-y-scroll scrollbar-thin  scrollbar-thumb-blue-950 scrollbar-track-transparent">
            <div className="search flex justify-between items-center gap-5">
                <div className="searchBar flex  bg-blue-950/50 h-10 items-center ml-6 p-4 gap-2 rounded-lg ">
                    <FaSearch/>
                    <input type="search" placeholder='search' className='bg-transparent outline-none'/>
                </div>


                {
                    addMode ?(<FiPlusCircle className='mr-5 cursor-pointer text-blue-950'  onClick={() => setAddMode(prev => !prev)}  size={28}/>):
                    (<FiMinusCircle className='mr-5 cursor-pointer text-blue-950'  onClick={() => setAddMode(prev => !prev)}  size={28}/>)
                    
                }
                
            </div>

            <div className='chatItems  '>

            <div className="item flex items-center m-6 py-2 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14' />
                    <div className='text'>
                        <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>

                <div className="item flex items-center m-6 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14'/>
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>
                
                <div className="item flex items-center m-6 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14' />
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>
                
                <div className="item flex items-center m-6 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14'/>
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>
                <div className="item flex items-center m-6 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14'/>
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>

                <div className="item flex items-center m-6 py-2 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14' />
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>

                <div className="item flex items-center m-6 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14'/>
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>
                
                <div className="item flex items-center m-6 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14' />
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>
                
                <div className="item flex items-center m-6 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14'/>
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>
                <div className="item flex items-center m-6 gap-4 border-b-2 border-gray-400 pb-3">
                    <img src={avatar} alt="avatar" className='rounded-full w-14 h-14'/>
                    <div className='text'>
                    <h2 className='text-lg'>John Doe</h2>
                        <p className='text-sm'>Hello world</p>
                    </div>
                </div>
                </div>
                {addMode && <AddUser/>}
                
        </div>
    
  )
}

export default ChatList