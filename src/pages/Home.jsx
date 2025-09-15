import React from 'react'
import lastOfUsImg from '../assets/LastOfUs.avif';

const Home = () => {
  return (
    <>
    
          <div className="relative bg-[#070F2B]">
            
            <img
              src={lastOfUsImg}
              alt="The Last of Us"
              className="w-full h-[500px] object-cover "
            />
    
           
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#070F2B] to-transparent pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#070F2B] to-transparent pointer-events-none" />
            
          </div>
    </>
  )
}

export default Home