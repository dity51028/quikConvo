import React, { useState } from 'react'
import avtar from '../../../assets/avatar.png'
import { arrayUnion, collection,  doc,  getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../../../lib/firebase';
import { useUserStore } from '../../../lib/userStore';

const AddUser = () => {

   const [user,setUser] = useState(null)
   const {currentUser} = useUserStore()

  const handleSearch =async (e)=>{
      e.preventDefault();
      const formData = new FormData(e.target);
      const userName = formData.get("userName")

      try{
        // Create a reference to the cities collection
        const userRef = collection(db, "users");

        // Create a query against the collection.
          const q = query(userRef, where("Username", "==", userName));
          const querySnapShot = await getDocs(q)
          if(!querySnapShot.empty){
             setUser(querySnapShot.docs[0].data())
          }

      }catch(err){
        console.log(err);
      }
  }

  const handleAdd = async () =>{
  
    const chatRef = collection(db,"chats")
    const userchatsRef = collection (db,"userChat")

    try{
      const newChatRef = doc(chatRef)
      await setDoc(newChatRef,{
        createdAt:serverTimestamp(),
        messages:[],
      });

     let update= await updateDoc (doc(userchatsRef,user.id),{
        chats:arrayUnion({
          chatId:newChatRef.id,
          lastMessage:"",
          receiverId :currentUser.id,
          updateAt : Date.now(),
        })
      })
      console.log(update);

      let update2 =await updateDoc (doc(userchatsRef,currentUser.id),{
        chats:arrayUnion({
          chatId:newChatRef.id,
          lastMessage:"",
          receiverId :user.id,
          updateAt : Date.now(),
        })
      })
      console.log(update2);
     

    }catch(err){
        console.log(err);
    }
  }

  return (
    <div className='bg-orange-500/80 absolute top-0 bottom-0 left-0 right-0 m-auto p-8 w-max h-max rounded-2xl'>
      <form className="search flex gap-6" onSubmit={handleSearch}>
        <input type="text" name='userName' placeholder='Enter Username' className='p-2 rounded-lg outline-none text-black'/>
        <button className='bg-blue-950 p-2 rounded-lg' >Search</button>
      </form>

     {user && <div className="user">
      <div className="details flex justify-around items-center my-4 ">
        <img src={user.avatar || avtar} alt="" className='rounded-full w-10 h-10' />
        <h1 className='font-bold text-white bg-slate-500 p-3 rounded-lg text-2xl'>
          {user.Username}
        </h1>
      </div>
      <button className='bg-blue-950 px-8 py-3 ml-[30%] rounded-lg cursor-progress text-xl' onClick={handleAdd}>Add User</button>
      </div>}

      {
        (!user) && <h1 className='ml-6 mt-4 text-xl font-bold'>OOPS!! No user ..</h1>
      }
     


    </div>
  )
}

export default AddUser