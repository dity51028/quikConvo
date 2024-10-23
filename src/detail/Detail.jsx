import React from 'react'
import avatar from '../assets/avatar.png'

const Detail = () => {
  return (
    <div className='detail flex flex-1 gap-4'>
      <div className="top flex flex-col items-center">
        <img src={avatar} alt="" className='rounded-full w-20 h-20' />
        <h1 className='text-lg font-bold'>John Doe</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      <div className="bottom">

      </div>
    </div>
  )
}

export default Detail