import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'

//  importing components
import Username from './components/Username'
import Reset from './components/Reset'
import Recovery from './components/Recovery'
import Register from './components/Register'
import Password from './components/Password'
import PageNOtFound from './components/PageNOtFound'
import Profile from './components/Profile'

function App() {
  
  //  router roots 
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Username></Username>
    },
    {
      path : '/register',
      element : <Register></Register>
    },
    {
      path : '/recovery',
      element : <Recovery></Recovery>
    },
    {
      path : '/profile',
      element : <Profile></Profile>
    },
    {
      path : '/reset',
      element : <Reset></Reset>
    },
    {
      path : '/password',
      element : <Password></Password>
    },
    {
      path : '/*',
      element : <PageNOtFound></PageNOtFound>
    },
  ])

  return (
   <>

  <main>
    <RouterProvider  router={router} ></RouterProvider>
  </main>

   </>
  )
}

export default App
