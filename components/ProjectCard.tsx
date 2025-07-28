
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
    featured?: boolean;
  };
  delay?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, delay = 0, featured = false }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`group relative bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 overflow-hidden hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 ${featured ? 'lg:col-span-1' : ''}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full ${featured ? 'h-64' : 'h-48'} object-cover object-top transition-transform duration-300 group-hover:scale-105 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className={`w-full ${featured ? 'h-64' : 'h-48'} bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center`}>
            <i className="ri-image-line text-4xl text-white"></i>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
          >
            <i className="ri-github-fill text-lg"></i>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
          >
            <i className="ri-external-link-line text-lg"></i>
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-poppins mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
