import React from 'react'
import List from './list/List'
import Chat from './chat/Chat'
import Detail from './detail/Detail'

const App = () => {
  return (
    <div className="bg-[url('./assets/bg.jpg')]  bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center ">
      <div className="container inset-0 backdrop-blur-3xl backdrop-saturate-[180%] bg-blue-950/50 p-6 rounded-lg flex items-center justify-center ">
        <div className='text-white flex '>
           <List/>
           <Chat/>
           <Detail/>
        </div>
      </div>
    </div>
  )
}

export default App