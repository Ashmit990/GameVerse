import React from 'react'
import login from '../assets/login.jpg';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigateToHomePage = useNavigate()
  const navigateToLoginPage = useNavigate()
  return (
    <>
    <section className='flex h-full justify-between pl-[140px]'>
       <div className='h-[600px] w-[500px] flex flex-col items-center pt-[50px] mt-[10px] ml-[-50px] '>
        <span className='font-bold text-white text-[40px]'>Create an account</span>
        <div className='w-full h-[400px] mt-[40px] text-white'>
            <input className='bg-[#535C91] w-full border-none outline-none text-[18px] rounded-lg h-[65px] pl-5' type="text" placeholder='Full Name' />
            <input className='bg-[#535C91] mt-[30px] w-full border-none outline-none text-[18px] rounded-lg h-[65px] pl-5' type="email" placeholder='Email Address' />
             <input className='bg-[#535C91] mt-[30px] border-none outline-none text-[18px] w-full rounded-lg h-[65px] pl-5' type="text" placeholder='Password' />
            <button className='mt-[30px] bg-[#1B1A55] w-full rounded-lg text-[18px] h-[65px]' type="text">Submit</button>
            <p className='mt-[18px]'>Already have an account? <span onClick={()=>navigateToLoginPage('/login')} className='font-semibold cursor-pointer underline'>Login</span></p>
             <p className='mt-[18px]'>Go back to home page? <span onClick={()=>navigateToHomePage('/')} className='font-semibold cursor-pointer underline'>Home</span></p>
           
        </div>
       </div>
       <img className='w-[600px] h-[630px]' src={login} alt="" />
    </section>
    </>
  )
}

export default SignupPage