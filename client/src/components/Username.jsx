import React from 'react'
import { Link } from 'react-router-dom'
import usernameImg from '../assets/username-img.jpg'

const Username = () => {
  return (
   <>
    <div className='flex items-center justify-center h-[100dvh]'>
        <div className='m-[21px] flex flex-col items-center justify-center gap-y-4 p-7 rounded-[11px] text-center username-boxshadow'>
          <h2>Hello Again</h2>
          <p>Explore more by connecting with us</p>
          <img src={usernameImg} className="username-img" alt="avatar" />
           <div className='flex flex-col items-center justify-center  w-full gap-2 my-4'>
            <input type="text" placeholder='username' className='py-1 w-full text-[20px] px-10 username-input' />
            <button className='px-5 py-2 bg-red-400 text-white w-full font-bold rounded-[11px]'>Let's Go</button>
           </div>
           <div className='flex items-center justify-center gap-2'>
            <p>Not a member?</p>
            <p><Link to="/register" className='text-red-500 font-bold'>Register Now</Link></p>
           </div>
        </div>
    </div>
   </>
  )
}

export default Username