import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import avatar from '../../assets/avatar.png';
import AddUser from './addUser/AddUser';
import { useUserStore } from '../../lib/userStore';
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useNavigate } from 'react-router-dom';

const ChatList = () => {
    const [addMode, setAddMode] = useState(true);
    const [chats, setChats] = useState([]);
    const [input,setInput] = useState("");

    const { currentUser } = useUserStore();
    const { changeChat } = useChatStore();
    const navigate = useNavigate();


    useEffect(() => {
        const unsub = onSnapshot(doc(db, "userChat", currentUser.id),
            async (res) => {
                const items = res.data().chats;

                const promises = items.map(async (item) => {
                    const userDocRef = doc(db, "users", item.receiverId);
                    const userDocSnap = await getDoc(userDocRef);
                    const user = userDocSnap.data();

                    return { ...item, user };
                });

                const chatData = await Promise.all(promises);
                setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
            }
        );

        return () => {
            unsub();
        };
    }, [currentUser.id]);


    const handleSelect =async (chat)=>{

        const userChats = chats.map(item=>{
            const {user,...rest} = item;
            return rest;
        });
        const chatIndex = userChats.findIndex(item=>item.chatId === chat.chatId)

        userChats[chatIndex].isSeen = true;
        const userChatRef = doc(db,'userChat',currentUser.id);

        try {
            await updateDoc(userChatRef,{
                chats:userChats,
            })
            changeChat(chat.chatId,chat.user)
            
        } catch (err) {
            console.log(err)   
        }
    }


    const filteredChat = chats.filter(c=>c.user.Username.toLowerCase().includes(input.toLowerCase()))

    return (
        <div className="chatlist mt-6 flex flex-col flex-1 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-transparent">
            <div className="search flex justify-between items-center gap-5">
                <div className="searchBar flex bg-blue-950/50 h-10 items-center ml-6 p-4 gap-2 rounded-lg">
                    <FaSearch />
                    <input type="search" placeholder="search" className="bg-transparent outline-none" onChange={(e)=>setInput(e.target.value)}/>
                </div>
                {
                    addMode
                        ? <FiPlusCircle className="mr-5 cursor-pointer text-blue-950" onClick={() => setAddMode(prev => !prev)} size={28} />
                        : <FiMinusCircle className="mr-5 cursor-pointer text-blue-950" onClick={() => setAddMode(prev => !prev)} size={28} />
                }
            </div>

            <div className="chatItems">
                {
                    filteredChat.map((chat) => (
                        <div className="item flex items-center m-6 py-2 gap-4 border-b-2 border-gray-400 pb-3 hover:cursor-pointer" 
                        key={chat.chatId}
                        onClick={()=>navigate(`${chat.chatId}`)}
                        style={{
                            backgroundColor:chat?.isSeen ? 'transparent' : '#5183fe',
                        }}
                        >
                            <img src={chat.user?.avatar || avatar} alt="avatar" className="rounded-full w-14 h-14" />
                            <div className="text">
                                <h2 className="text-lg">{chat.user?.Username || "Unknown User"}</h2>
                                <p className="text-sm">{chat.lastMessage || "No message yet"}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            {(!addMode) && <AddUser />}
        </div>
    );
};

export default ChatList;
