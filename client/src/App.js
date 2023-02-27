import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import all components
import Username from "./components/Username";
import Reset from "./components/Reset";
import Register from "./components/Register";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import PageNotFound from "./components/PageNotFound";

//auth middleware
import { AuthorizeUser, ProtectRoute } from './middleware/auth.js'

/* root routes*/
const router = createBrowserRouter([
    {
        path :'/',
        element : <Username/>
    },
    {
        path :'/reset',
        element : <Reset/>
    },
    {
        path :'/register',
        element : <Register/>
    },
    {
        path :'/recovery',
        element : <Recovery/>
    },
    {
        path :'/profile',
        element : <AuthorizeUser><Profile/></AuthorizeUser>
    },
    {
        path :'/password',
        element : <ProtectRoute><Password/></ProtectRoute>
    },
    {
        path :'*',
        element : <PageNotFound/>
    }
])

export default function App() {
    return (
      <main>
          <RouterProvider router={router}></RouterProvider>
      </main>
    )
  }