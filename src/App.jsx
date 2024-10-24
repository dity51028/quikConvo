import React from 'react'
import List from './list/List'
import Chat from './chat/Chat'
import Detail from './detail/Detail'
import Login from './login/Login'
import Notification from './notification/Notification'

const App = () => {
  const user = false;

  return (
    <div className="bg-[url('./assets/bg.jpg')]  bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center ">
      <div className="container w-full h-[90vh] inset-0 backdrop-blur-3xl backdrop-saturate-[180%] bg-blue-950/50 border p-6 rounded-lg  ">
       {
        user ? (
          <div className='text-white flex w-full h-full'>
          <List/>
          <Chat/>
          <Detail/>
        </div>
        ) :(
        <Login/>
        )
       }
       <Notification/>
       
      </div>
    </div>
  )
}

export default App