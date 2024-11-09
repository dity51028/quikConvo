
import Home from '../auth/Home.jsx'
import Chat from '../chat/Chat.jsx'
import Login from '../login/Login.jsx'

export const routes = [
    {
        path:'auth',
        element:<Login/>,
        
    },
    {
        path:'chat',
        element:<Home/>,
        children:[
            {
                path:":id",
                element:<Chat/>
            }
        ]
    }
]