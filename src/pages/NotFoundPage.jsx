import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const homePage = useNavigate()
  return (
    <>
    <p className='font-bold text-white text-[30px] text-center'>Error: Page Not Found</p>
    <p className='font-bold text-white text-[20px] text-center'>Go back to home page? <span onClick={()=>homePage("/")} className='underline cursor-pointer'>Home</span></p>

    </>
  )
}

export default NotFoundPage