
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    icon: string;
  };
  delay?: number;
}

export default function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, delay * 1000 + 500);

    return () => clearTimeout(timer);
  }, [skill.level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center mr-4">
          <i className={`${skill.icon} text-xl text-white`}></i>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white">
            {skill.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {skill.level}% proficiency
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-violet-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${animatedLevel}%` }}
            transition={{ duration: 1, delay: delay + 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
