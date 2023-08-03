"use client";
import Link from 'next/link';
import React from 'react'
import { useRouter  } from 'next/router';


const SignupPage = () => {
    const[user,setUser]=React.useState({
        email:"",
        password:"",
        username:"",
    })

    const onSignup=async()=>{
      
        
    }

  return (
    <div className='flex flex-col items-center'>
        <h1 className='font-white m-5 text-4xl text-red-500'>SignupPage</h1>
        
        <hr/>
        <h2 className='font-white text-1xl text-white'>UserName</h2>
        <label htmlFor="username">username</label> 
        <input className='mt-3 focus:outline-none p-2 border border-gray-300 rounded-lg m-4 focus:border-gray-600' type="text" 
                id='username' 
                value={user.username} 
                placeholder='enter a username'
                onChange={(e)=>setUser({...user,username:e.target.value})}
         />
         <h2 className='font-white text-1xl text-white'>Email ID</h2>
        <label htmlFor="email">Email </label> 
        <input className='mt-3 focus:outline-none p-2 border border-gray-300 rounded-lg m-4 focus:border-gray-600' type="email" 
                id='email' 
                value={user.email} 
                placeholder='enter a email'
                onChange={(e)=>setUser({...user,email:e.target.value})}
         />
         <h2 className='font-white text-1xl text-white'>Password</h2>
        <label htmlFor="password">password</label> 
        <input className='mt-3 w-4/7 focus:outline-none p-2 border border-gray-300 rounded-lg m-4 focus:border-gray-600' type="text" 
                id='password' 
                value={user.password} 
                placeholder='enter a password'
                onChange={(e)=>setUser({...user,password:e.target.value})}
         />
         <button onClick={onSignup} className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline:none focus:border-gray-600 bg-red-500 text-white'>Submit</button>
         <Link className='text-white' href='/login'>login</Link>
    </div>
  )
}

export default SignupPage