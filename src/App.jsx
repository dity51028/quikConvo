import React, { useEffect } from 'react'
import List from './list/List'
import Chat from './chat/Chat'
import Detail from './detail/Detail'
import Login from './login/Login'
import Notification from './notification/Notification'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './lib/firebase'
import { useUserStore } from './lib/userStore'
import { useChatStore } from './lib/chatStore'

const App = () => {
  
  const {currentUser,isLoading,fetchUserInfo} = useUserStore()
  const {chatId} = useChatStore();

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user?.uid)
    });

    return ()=>{
      unSub();
    }

  },[fetchUserInfo]);

  console.log(currentUser);

  if(isLoading) return <div className='p-20 text-2xl rounded-lg bg-blue-950/50'>Loading...</div>

  return (
    <div className="bg-[url('./assets/bg.jpg')]  bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center ">
      <div className="container w-full h-[90vh] inset-0 backdrop-blur-3xl backdrop-saturate-[180%] bg-blue-950/50 border p-6 rounded-lg  ">
       {
        currentUser ? (
          <div className='text-white flex w-full h-full'>
          <List/>
         {chatId && <Chat/>}
         {chatId && <Detail/>}
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