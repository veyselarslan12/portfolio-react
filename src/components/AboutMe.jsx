import React from 'react';
import profile from '../assets/profile.jpg'; // Profile image

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-gray-800 text-white flex flex-col items-center md:flex-row md:justify-around px-8">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, I'm Veysel Arslan, a passionate Full Stack Web Developer based in Chicago, USA. I have a strong background in building
          dynamic web applications using the latest technologies like React, Node.js, and MongoDB. I love coding and am always eager to learn more
          about new frameworks and tools that can help me improve my skills.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          My goal is to create innovative web solutions that provide an excellent user experience and help businesses achieve their goals.
          I'm also a licensed skydiver, and I enjoy challenging myself both personally and professionally.
        </p>
      </div>

      <div className="md:w-1/4">
        <img src={profile} alt="Veysel Arslan" className="w-64 h-64 rounded-full object-cover shadow-lg" />
      </div>
    </section>
  );
};

export default AboutMe;
