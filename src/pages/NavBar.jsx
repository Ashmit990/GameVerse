import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router'

const NavBar = () => {

  const navigateLogin = useNavigate()
  
  return (
    <>
      {/* Navbar */}
      <div className="text-[15px] flex justify-between items-center tracking-wide text-gray-300 w-full h-[70px] px-14 mt-2">
        <div className="w-[21%] h-full flex justify-between items-center">
          <p className="font-orbitron text-[50px] font-bold text-[#00CCFF]">G</p>
          <input
            className="bg-[#1B1A55] rounded-xl h-[35px] w-[185px] font-sans pl-3 mt-[0.8px] border-none outline-none font-normal"
            placeholder="Search Store"
            type="text"
          />
        </div>

        <ul className="w-[35%] text-[18px] h-full flex justify-between items-center">
          <NavLink className={({isActive})=>isActive ? 'text-white font-bold' : ""} to='/'>Home</NavLink>
          <NavLink className={({isActive})=>isActive ? 'text-white font-bold' : ""} to='browse'>Browse</NavLink>
          <NavLink className={({isActive})=>isActive ? 'text-white font-bold' : ""} to='news'>News</NavLink>
          <NavLink className={({isActive})=>isActive ? 'text-white font-bold' : ""} to='about'>About</NavLink>
        </ul>

        <div className="w-[20%] h-full flex justify-between items-center">
          {/* <div className='rounded-full border-2 border-white w-9 h-9 flex items-center justify-center font-bold text-[23px]'>A</div> */}
          <button className="rounded-xl border-2 border-gray-400 flex justify-center items-center w-[40%] h-[62%] text-[15px]" onClick={()=>navigateLogin('/login')}>Log in</button>
          <button className="rounded-xl flex justify-center items-center w-[45%] h-[62%] bg-[#1B1A55] text-[15px]"onClick={()=>navigateLogin('/signup')}>Register</button>
        </div>
      </div>

      
    </>
  );
};

export default NavBar;
