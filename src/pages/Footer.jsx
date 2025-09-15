import React from 'react'
import socialMedias from '../assets/SocialMedias.jpg';

const Footer = () => {
  return (
    <>
    <section className='w-full h-[170px] px-14 mt-36 text-white flex justify-between items-center'>
        <div className='border-r-2 border-white w-[55%] h-full flex-col justify-between'>
          <div className=' w-full h-[45%] flex justify-start items-center'>
            <p className="font-orbitron text-[50px] font-bold text-[#00CCFF]">G</p>
            <p className='font-semibold text-[27px] ml-5'>GameVerse</p>
          </div>
          <div className='w-[600px] text-[20px]'>
            <p>GameVerse — Where every gamer levels up! From epic AAA adventures to indie gems, grab the hottest deals on PC, Xbox, PlayStation & Nintendo. Play more, pay less. 🎮</p>
          </div>
          
        </div>
        
         <div className=' w-[40%] h-full '>
          <div className='flex justify-between items-center w-[100%] h-[70px]  font-semibold text-[28px] pr-[109px]'>
            <p>My Account</p>
            <p>Support</p>
          </div>
          <div className='flex justify-between  w-[100%] mt-[10px] h-[33px]  text-[19px] pr-[35px]'>
            <p>My Account</p>
            <p>Terms and conditions</p>
          </div>
           <div className='flex justify-between w-[100%] h-[33px]  text-[19px]'>
            <p>My Orders</p>
            <p>Privacy and cookie policy</p>
          </div>
           <div className='flex justify-end w-[100%]  h-[33px]  text-[19px] pr-24'>
            <p>Refund policy</p>
          </div>
         </div>
    </section>
    <section className='flex items-center justify-end px-14 mt-7'>
        <img className='w-64' src={socialMedias} alt="" />
    </section>
    <section className='bg-white h-[2px] w-full mt-3'></section>
    <section className='w-full text-white h-14  flex items-center justify-center'>
      <p>Copyright GameVerse.com 2025, all rights reserved</p>
    </section>
    </>
  )
}

export default Footer