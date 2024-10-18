import React from 'react'
import UserInfo from './userinfo/UserInfo'
import ChatList from './chatList/ChatList'

const List = () => {
  return (
    <div className='list flex flex-1 flex-col border'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List