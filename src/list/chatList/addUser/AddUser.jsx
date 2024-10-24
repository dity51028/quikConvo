import React from 'react'
import avtar from '../../../assets/avatar.png'

const AddUser = () => {
  return (
    <div className='bg-orange-500/70 absolute top-0 bottom-0 left-0 right-0 m-auto p-8 w-max h-max rounded-2xl'>
      <div className="search flex gap-6">
        <input type="text" name='userName' placeholder='Enter Username' className='p-2 rounded-lg outline-none text-black'/>
        <button className='bg-blue-950 p-2 rounded-lg'>Search</button>
      </div>

      <div className="details flex justify-around items-center my-4 ">
        <img src={avtar} alt="" className='rounded-full w-10 h-10' />
        <h1 className='font-bold text-black text-2xl'>John doe</h1>
      </div>

      <button className='bg-blue-950 p-3 ml-[35%] rounded-lg cursor-progress'>Add User</button>
    </div>
  )
}

export default AddUser