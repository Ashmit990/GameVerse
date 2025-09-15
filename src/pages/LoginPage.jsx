import React, { useState } from 'react'
import login from '../assets/login.jpg';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const navigateToHomePage = useNavigate()
    const navigateToSignUpPage = useNavigate()


  


  return (
    <>
    <section className='flex h-full items-center justify-between pl-[140px] '>
       <div className='h-[738px] w-[500px] flex flex-col items-center pt-[120px]  '>
        <span className='font-bold text-white text-[40px]'>Welcome To GameVerse</span>
        <div className='w-full h-[400px] mt-[40px] text-white '>
            <input className='bg-[#535C91] w-full border-none outline-none text-[18px] rounded-lg h-[65px] pl-5' type="email" placeholder='Email Address' />
             <input className='bg-[#535C91] mt-[30px] border-none outline-none text-[18px] w-full rounded-lg h-[65px] pl-5' type="text" placeholder='Password' />
            <button className='mt-[30px] bg-[#1B1A55] w-full rounded-lg text-[18px] h-[65px]' type="text">Log in</button>
            <p className='mt-[18px]'>Don't have an account? <span onClick={()=>navigateToSignUpPage('/signup')} className='font-semibold cursor-pointer underline'>Signup</span></p>
            <p className='mt-[18px]'>Go back to home page? <span onClick={()=>navigateToHomePage('/')} className='font-semibold cursor-pointer underline'>Home</span></p>
           
        </div>
       </div>
       <img className='w-[630px] h-[738px]' src={login} alt="" />
    </section>
    </>
  )
}

export default LoginPage