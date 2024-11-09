import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {routes} from './route/routes.jsx'

const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App