
'use client';

import { motion } from 'framer-motion';
import { ThemeProvider } from '../../components/ThemeProvider';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SkillCard from '../../components/SkillCard';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 95, icon: 'ri-reactjs-line' },
        { name: 'Next.js', level: 90, icon: 'ri-nextjs-line' },
        { name: 'TypeScript', level: 88, icon: 'ri-code-s-slash-line' },
        { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line' },
        { name: 'JavaScript', level: 94, icon: 'ri-javascript-line' },
        { name: 'HTML5', level: 96, icon: 'ri-html5-line' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85, icon: 'ri-nodejs-line' },
        { name: 'Express.js', level: 82, icon: 'ri-server-line' },
        { name: 'MongoDB', level: 78, icon: 'ri-database-line' },
        { name: 'PostgreSQL', level: 75, icon: 'ri-database-2-line' },
        { name: 'Firebase', level: 80, icon: 'ri-fire-line' },
        { name: 'REST APIs', level: 88, icon: 'ri-links-line' }
      ]
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85, icon: 'ri-pen-nib-line' },
        { name: 'Adobe XD', level: 80, icon: 'ri-artboard-line' },
        { name: 'Git', level: 90, icon: 'ri-git-branch-line' },
        { name: 'Docker', level: 70, icon: 'ri-container-line' },
        { name: 'AWS', level: 65, icon: 'ri-cloud-line' },
        { name: 'Vercel', level: 88, icon: 'ri-global-line' }
      ]
    },
    {
      title: 'Creative & Emerging',
      skills: [
        { name: 'Framer Motion', level: 92, icon: 'ri-magic-line' },
        { name: 'Three.js', level: 72, icon: 'ri-3d-view-line' },
        { name: 'WebGL', level: 68, icon: 'ri-shapes-line' },
        { name: 'AI Integration', level: 75, icon: 'ri-robot-line' },
        { name: 'PWA', level: 85, icon: 'ri-smartphone-line' },
        { name: 'GraphQL', level: 70, icon: 'ri-flow-chart' }
      ]
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <Navbar />
        
        <main className="pt-20">
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                  Skills & Expertise
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Technologies and tools I use to bring ideas to life
                </p>
              </motion.div>

              <div className="space-y-16">
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  >
                    <h2 className="text-3xl font-bold font-orbitron mb-8 text-center text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillCard
                          key={skillIndex}
                          skill={skill}
                          delay={skillIndex * 0.1}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-20 bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
              >
                <h2 className="text-3xl font-bold font-orbitron mb-6 text-center text-gray-900 dark:text-white">
                  Currently Learning
                </h2>
                <div className="grid md:grid-cols-4 gap-4">
                  {[ 
                    { name: 'Rust', icon: 'ri-settings-4-line' },
                    { name: 'Machine Learning', icon: 'ri-brain-line' },
                    { name: 'Web3', icon: 'ri-coin-line' },
                    { name: 'Cybersecurity', icon: 'ri-shield-line' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-gradient-to-r from-blue-600 to-violet-600 p-4 rounded-xl text-white text-center hover:from-violet-600 hover:to-blue-600 transition-all duration-300"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <i className={`${item.icon} text-2xl`}></i>
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
