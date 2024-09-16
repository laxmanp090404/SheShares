import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './Components/Body.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Choose from './Pages/Choose.jsx'
import RoomsList from './Pages/RoomsList.jsx'
import Profile from './Pages/Profile.jsx'

const Approuter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/login',
        element:<Login/>
      }
      ,{
        path:'/choose',
        element:<Choose/>
      },
      ,
      {
        path:'/profile',
        element:<Profile/>
      }
    ],
    
  }
  ,
  {
    path:'/viewrooms',
    element:<RoomsList/>
 }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter}></RouterProvider>)
