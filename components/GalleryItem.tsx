
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    type: string;
    image: string;
    description: string;
  };
  delay?: number;
}

export default function GalleryItem({ item, delay = 0 }: GalleryItemProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="group relative bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 overflow-hidden hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-105 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="w-full h-64 bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center">
              <i className="ri-image-line text-4xl text-white"></i>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-200 text-sm">{item.description}</p>
          </div>
          
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <i className="ri-eye-line text-white text-lg"></i>
            </div>
          </div>
        </div>
      </motion.div>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold font-orbitron mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 capitalize">
                {item.category.replace('-', ' ')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
