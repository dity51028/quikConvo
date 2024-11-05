
import { create } from 'zustand'
import { useUserStore } from './userStore';


export const useChatStore = create((set) => ({
  chatId: null,
  user:null,
  isCurrentUserBlocked:false,
  isreceiverBlocked:false,
 
  changeChat:(chatId,user)=>{
    const currentUser = useUserStore.getState().currentUser;

    //if current user is blocked

    if(user.blockList.includes(currentUser.id)){
        return set({
            chatId,
            user:null,
            isCurrentUserBlocked:true,
            isreceiverBlocked:false,
        });
    }
    //if receiver is blocked
    else if(currentUser.blockList.includes(user.id)){
        return set({
            chatId,
            user:user,
            isCurrentUserBlocked:false,
            isreceiverBlocked:true,
        });
    } else {
        return set({
            chatId,
            user,
            isCurrentUserBlocked:false,
            isreceiverBlocked:false,
        });
    }

   

    changeBlock:()=>{
        set(state=>({...state,isreceiverBlocked: !state.isreceiverBlocked}))
    }

  }
}))
