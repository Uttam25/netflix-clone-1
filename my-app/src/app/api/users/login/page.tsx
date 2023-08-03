"use client";
import Link from 'next/link';
import React from 'react'
import { useRouter  } from 'next/navigation';


const LoginPage = () => {
    const[user,setUser]=React.useState({
        email:"",
        password:"",
        
    })
    const router=useRouter();

    const onLogin=async()=>{
        
      const myEmail=process.env.NEXT_PUBLIC_EMAIL;
      const myPassword=process.env.NEXT_PUBLIC_PASSWORD;
     
      if (user.email === myEmail && user.password === myPassword) {
        router.push('/home');

         } 
         else{
            console.log('Login failed. Invalid credentials.');
            alert('Login failed. Invalid credentials.');
         }
    }

  return (
    <div className='flex flex-col items-center'>
        <h2 className='m-7  font-white text-5xl text-red-500'>Log In</h2>

        <h2 className='font-white text-1xl text-white'>Email</h2>
        <input className='mt-6 focus:outline-none p-2 border border-gray-300 rounded-lg m-4 focus:border-gray-600' type="email" 
                id='email' 
                value={user.email} 
                placeholder='enter a email'
                onChange={(e)=>setUser({...user,email:e.target.value})}
         />
         <h2 className='font-white text-1xl text-white'>Password</h2>
        <input className='mt-3 w-4/7 focus:outline-none p-2 border border-gray-300 rounded-lg m-4 focus:border-gray-600' type="text" 
                id='password' 
                value={user.password} 
                placeholder='enter a password'
                onChange={(e)=>setUser({...user,password:e.target.value})}
         />
         <button onClick={onLogin} className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline:none focus:border-gray-600 bg-red-500 text-white'>Submit</button>
         <Link className='text-white' href='/signup'>New User? <span> sign in</span></Link>
    </div>
  )
}

export default LoginPage