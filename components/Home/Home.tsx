"use client";
import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Whychoose from './WhyChoose/Whychoose'
import Connectus from './Connectus/Connectus'
import Downloadsection from './Downloadsection/Downloadsection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {

    useEffect(()=>{
      const initAOS= async () => {
        await import("aos");
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: true,
          anchorPlacement: "top-bottom"
        });
      };
    initAOS();
  },[]);

  return (
    <div className="overflow-hidden">
      <Hero/>
      <About/>
      <Whychoose/>
      <Connectus/>
      <Downloadsection/>
      </div>
  )
}

export default Home