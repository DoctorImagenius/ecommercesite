
'use client';

import { motion } from 'framer-motion';
import { ThemeProvider } from '../../components/ThemeProvider';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard built with Next.js and MongoDB.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20futuristic%20e-commerce%20platform%20interface%20with%20clean%20design%2C%20neon%20blue%20accents%2C%20product%20displays%2C%20shopping%20cart%2C%20and%20sleek%20navigation%20on%20a%20dark%20background%20with%20subtle%20gradients%20and%20glowing%20elements&width=400&height=300&seq=ecommerce1&orientation=landscape',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/haroon/ecommerce-platform',
      demo: 'https://ecommerce-demo.haroon.dev',
      featured: true
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, message encryption, and beautiful animations using Socket.io and OpenAI API.',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20chat%20interface%20with%20glowing%20message%20bubbles%2C%20dark%20theme%2C%20neon%20blue%20and%20violet%20gradients%2C%20modern%20typography%2C%20and%20clean%20minimalist%20design%20with%20subtle%20animations&width=400&height=300&seq=aichat1&orientation=landscape',
      technologies: ['React', 'Socket.io', 'OpenAI', 'Express.js'],
      github: 'https://github.com/haroon/ai-chat-app',
      demo: 'https://ai-chat.haroon.dev',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website with dark mode, smooth animations, and responsive design showcasing projects and skills.',
      image: 'https://readdy.ai/api/search-image?query=Sleek%20portfolio%20website%20homepage%20with%20futuristic%20design%2C%20dark%20background%20with%20blue%20and%20violet%20gradients%2C%20professional%20layout%2C%20modern%20typography%2C%20and%20glowing%20accent%20elements&width=400&height=300&seq=portfolio1&orientation=landscape',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/haroon/portfolio',
      demo: 'https://haroon.dev',
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and advanced filtering.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20task%20management%20dashboard%20with%20dark%20theme%2C%20organized%20task%20cards%2C%20progress%20bars%2C%20calendar%20view%2C%20neon%20blue%20accents%2C%20and%20clean%20interface%20design%20with%20subtle%20glowing%20effects&width=400&height=300&seq=taskapp1&orientation=landscape',
      technologies: ['React', 'Firebase', 'Material-UI', 'PWA'],
      github: 'https://github.com/haroon/task-manager',
      demo: 'https://tasks.haroon.dev',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20weather%20dashboard%20interface%20with%20dark%20background%2C%20glowing%20weather%20icons%2C%20temperature%20displays%2C%20forecast%20cards%2C%20interactive%20map%2C%20and%20blue-violet%20gradient%20accents&width=400&height=300&seq=weather1&orientation=landscape',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/haroon/weather-dashboard',
      demo: 'https://weather.haroon.dev',
      featured: false
    },
    {
      title: 'Crypto Tracker',
      description: 'Cryptocurrency tracking application with real-time price updates, portfolio management, and market analysis tools.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20cryptocurrency%20tracking%20interface%20with%20dark%20theme%2C%20price%20charts%2C%20coin%20listings%2C%20portfolio%20displays%2C%20neon%20green%20and%20blue%20accents%2C%20and%20futuristic%20design%20elements&width=400&height=300&seq=crypto1&orientation=landscape',
      technologies: ['React', 'CoinGecko API', 'Recharts', 'Redux'],
      github: 'https://github.com/haroon/crypto-tracker',
      demo: 'https://crypto.haroon.dev',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
                  Projects
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  A collection of my recent work and creative projects
                </p>
              </motion.div>

              {featuredProjects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-20"
                >
                  <h2 className="text-3xl font-bold font-orbitron mb-8 text-center text-gray-900 dark:text-white">
                    Featured Projects
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredProjects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        project={project}
                        delay={index * 0.2}
                        featured={true}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold font-orbitron mb-8 text-center text-gray-900 dark:text-white">
                  Other Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      delay={index * 0.1}
                      featured={false}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-20 text-center"
              >
                <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                  <h3 className="text-2xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
                    Have a Project in Mind?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Let's collaborate and bring your ideas to life with cutting-edge technology
                  </p>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-medium hover:from-violet-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-violet-500/25 whitespace-nowrap">
                    Get In Touch
                  </button>
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
