"use client";
import React, { useEffect, useState } from 'react'
import Logo from '../Helper/Logo'
import { NAVLINKS } from '@/constant/constant'
import Link from "next/link"
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props={
  openNav: ()=>void;
}

const Nav = ({openNav}:Props) => {

  const[navBg,setNavBg]=useState(false); 

  useEffect(()=>{
    const handler= ()=>{
      if(window.scrollY>=90) setNavBg(true);
      else setNavBg(false);
    }
    window.addEventListener("scroll",handler);
    return()=>window.removeEventListener("scroll",handler);

  },[]);


  return (
    <div className={`transition-all ${navBg ? "bg-white shadow-md":"fixed"} duration-200 h-[12vh] z-100 fixed w-full`}>
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
            <Logo/>
        <div className="hidden lg:flex items-center space-x-10">
            {NAVLINKS.map((link)=>{
              return(
              <Link href={link.url} key={link.id} className="text-black hover:text-red-700 font-medium transition-all duration-200">
                <p>{link.label}</p>
                </Link>
              );
            })}
        </div>
            <div className="flex items-center space-x-4">
              <button className="px-3 py-3 rounded-full font-semibold text-sm cursor-pointer hover:bg-red-800 bg-red-600 transition-all duration-200 text-white ">Get Started For Free</button>
              <HiBars3BottomRight onClick={openNav}  className="w-8 h-8 cursor-pointer text-black lg:hidden" />
            </div>
        </div>
    </div>
    
  )
}

export default Nav