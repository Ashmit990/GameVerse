import React from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import about4 from '../assets/about4.jpg';

const About = () => {
  return (
    <>
      <div className="w-full h-[560px] px-14 mt-11 relative">
        <img
          className="w-full h-full object-cover rounded-xl opacity-25"
          src={about1}
          alt="About Background"
        />
        <div className="absolute w-[35%] h-[300px] top-[110px] left-[455px] flex flex-col justify-between items-center text-white">
          <p className="font-bold text-[65px]">About Us</p>
          <p className="text-center text-[18px]">
            GameVerse is dedicated to bringing you the best games from around the world. Our mission is to provide an unparalleled gaming platform where your passion for play can thrive.
          </p>
          <button className="rounded-xl border-2 border-white w-[150px] h-[50px]">
            Browse Games
          </button>
        </div>
      </div>

      <p className="text-[85px] font-bold text-white text-center mt-10">What We Offer</p>

      <div className="w-full h-[560px] px-14 mt-14 relative bg-[#070F2B]">
        <img
          className="ml-[255px] w-[80%] h-full object-cover rounded-xl opacity-30"
          src={about3}
          alt="What We Offer Background"
        />

        <div className="absolute top-0 left-[50px] h-full w-[29rem] bg-gradient-to-r from-[#070F2B] via-[#070F2B] via-70% to-transparent pointer-events-none z-10" />

        <div className="absolute w-[37%] h-[300px] top-[140px] left-[50px] flex flex-col  text-white z-20">

          <p className='font-bold text-white text-[33px]'>Massive Game Library</p>
          <div className='bg-[#66E0FF] w-[295px] h-[3px] mt-[3px] rounded-lg'></div>
          <p className='mt-[8px] text-[19px] text-[#848383]'>Dive into a vast collection of thousands of titles across every genre and platform. From action-packed shooters and immersive RPGs to relaxing puzzle games, our library grows every week to bring you the latest hits and timeless classics. Whether you’re a casual gamer or a hardcore enthusiast, you’ll always find something new to play.</p>

        </div>
      </div>



             <div className="w-full h-[560px] px-14 mt-20 relative bg-[#070F2B]">
        <img
          className=" w-[80%] h-full object-cover rounded-xl opacity-30"
          src={about4}
          alt="What We Offer Background"
        />

        <div className="absolute top-0 right-[50px] h-full w-[29rem] bg-gradient-to-l from-[#070F2B] via-[#070F2B] via-70% to-transparent pointer-events-none z-10" />

        <div className="absolute w-[44%] h-[300px] top-[140px] right-[100px] flex flex-col  text-white z-20">

          <p className='font-bold text-white text-[33px] ml-[380px]'>Exclusive Deals</p>
          <div className='bg-[#66E0FF] w-[295px] h-[3px] mt-[3px] ml-[320px] rounded-lg'></div>
          <p className='mt-[8px] text-[19px] text-[#848383] text-right'>Unlock offers you won’t find anywhere else. We partner directly with publishers to bring you incredible discounts, limited-time bundles, and exclusive pre-order bonuses. With deals dropping regularly, you’ll always have a reason to check back and grab your next favorite game at the best price</p>

        </div>
      </div>


       <div className="w-full h-[560px] px-14 mt-20 relative bg-[#070F2B]">
        <img
          className="ml-[255px] w-[80%] h-full object-cover rounded-xl opacity-30"
          src={about2}
          alt="What We Offer Background"
        />

        <div className="absolute top-0 left-[50px] h-full w-[29rem] bg-gradient-to-r from-[#070F2B] via-[#070F2B] via-70% to-transparent pointer-events-none z-10" />

        <div className="absolute w-[37%] h-[300px] top-[140px] left-[50px] flex flex-col  text-white z-20">

          <p className='font-bold text-white text-[33px]'>Gamers First</p>
          <div className='bg-[#66E0FF] w-[295px] h-[3px] mt-[3px] rounded-lg'></div>
          <p className='mt-[8px] text-[19px] text-[#848383]'>Our mission is to put players at the heart of everything we do. From lightning-fast downloads to responsive customer support, every feature is designed with your gaming experience in mind. We listen to our community, adapt to your feedback, and constantly improve to make sure your journey is smooth, exciting, and rewarding</p>

        </div>
      </div>


      <section className='mt-24 w-full h-[170px] px-14 flex justify-between items-center'>
        <div className="w-[285px] h-full rounded-xl bg-gradient-to-t from-[#070f2b00] to-[#3f465f] py-6 flex flex-col items-center">
          <p className='text-[#66E0FF] font-bold text-[50px]'>10,000+</p>
          <p className='text-[#848383]  text-[20px]'>Game Library</p>
        </div>

                <div className="w-[285px] h-full rounded-xl bg-gradient-to-t from-[#070f2b00] to-[#3f465f] py-6 flex flex-col items-center">
          <p className='text-[#66E0FF] font-bold text-[50px]'>200K+</p>
          <p className='text-[#848383]  text-[20px]'>Satisfied Gamers</p>
        </div>


                <div className="w-[285px] h-full rounded-xl bg-gradient-to-t from-[#070f2b00] to-[#3f465f] py-6 flex flex-col items-center">
          <p className='text-[#66E0FF] font-bold text-[50px]'>500K+</p>
          <p className='text-[#848383]  text-[20px]'>Purchase</p>
        </div>



                <div className="w-[285px] h-full rounded-xl bg-gradient-to-t from-[#070f2b00] to-[#3f465f] py-6 flex flex-col items-center">
          <p className='text-[#66E0FF] font-bold text-[50px]'>100M+</p>
          <p className='text-[#848383]  text-[20px]'>Downloads</p>
        </div>

        
      </section>


      
    </>
  );
};

export default About;
