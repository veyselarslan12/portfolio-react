// src/components/Portfolio.jsx
import React from 'react';
import projectsData from '../data/projects.json'; // Assuming your projects JSON file is in the `src/data` folder

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8"> {/* Adjusted gap and column count */}
        {projectsData.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-105">
            {/* Project Image */}
            <img src={project.imageSrc} alt={project.projectName} className="w-full h-32 object-cover rounded-md mb-2" />

            {/* Project Name */}
            <h3 className="text-xl font-semibold mb-2">{project.projectName}</h3>

            {/* Project Description */}
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            {/* Project Links */}
            <div className="flex justify-center space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-3 bg-blue-500 rounded hover:bg-blue-400 transition duration-300 text-xs"
                >
                  GitHub
                </a>
              )}
              {project.depUrl && (
                <a
                  href={project.depUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 px-3 bg-green-500 rounded hover:bg-green-400 transition duration-300 text-xs"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
