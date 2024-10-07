import React from 'react';
import profile from '../assets/profile-photo.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 text-white mt-16 px-8">
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-2">Veysel Halit Arslan</h1>
        <h2 className="text-2xl mb-4">Full Stack Web Developer</h2>
      </div>

      <div className="mt-8 md:mt-0 md:ml-16">
        <img src={profile} alt="Veysel Arslan" className="w-64 h-64 rounded-full object-cover shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
