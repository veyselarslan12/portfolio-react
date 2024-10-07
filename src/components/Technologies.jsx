import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGithub, FaGitAlt, FaBootstrap, FaFigma, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiGraphql, SiExpress, SiAntdesign, SiNetlify, SiRender, SiPostgresql, SiOpenai, SiRedux } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

const Technologies = () => {
  const techStack = [
    { name: 'HTML5', icon: <FaHtml5 size={40} className="text-red-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact size={40} className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress size={40} className="text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: 'GraphQL', icon: <SiGraphql size={40} className="text-pink-600" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub size={40} className="text-white" /> },
    { name: 'Netlify', icon: <SiNetlify size={40} className="text-blue-400" /> },
    { name: 'Render', icon: <SiRender size={40} className="text-blue-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-700" /> },
    { name: 'OpenAI', icon: <SiOpenai size={40} className="text-gray-400" /> },
    { name: 'Axios', icon: <AiOutlineApi size={40} className="text-gray-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-600" /> },
    { name: 'Ant Design', icon: <SiAntdesign size={40} className="text-red-500" /> },
    { name: 'Figma', icon: <FaFigma size={40} className="text-pink-500" /> },
    { name: 'Redux', icon: <SiRedux size={40} className="text-purple-400" /> },
    { name: 'SQL', icon: <FaDatabase size={40} className="text-blue-600" /> },
  ];

  return (
    <section id="technologies" className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Technologies I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-8">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1.5 }} 
            whileTap={{ scale: 0.95 }} 
            transition={{ type: 'spring', stiffness: 100, damping: 10 }} 
          >
            {tech.icon}
            <p className="mt-4 text-lg font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
