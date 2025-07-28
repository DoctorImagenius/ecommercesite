
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import GalleryItem from '../../components/GalleryItem';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Design' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX' },
    { id: 'art', name: 'Digital Art' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      category: 'web',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Modern%20futuristic%20e-commerce%20dashboard%20interface%20with%20dark%20theme%2C%20data%20visualization%2C%20product%20analytics%2C%20sales%20charts%2C%20and%20neon%20blue%20violet%20accents%20on%20clean%20minimalist%20background&width=400&height=300&seq=gallery1&orientation=landscape',
      description: 'Advanced dashboard design for e-commerce platform'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Sleek%20mobile%20banking%20app%20interface%20with%20dark%20theme%2C%20card%20designs%2C%20transaction%20history%2C%20futuristic%20UI%20elements%2C%20and%20blue%20violet%20gradient%20accents%20on%20modern%20smartphone%20mockup&width=300&height=400&seq=gallery2&orientation=portrait',
      description: 'Secure and intuitive mobile banking application'
    },
    {
      id: 3,
      title: 'AI Chat Interface',
      category: 'ui',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20chat%20interface%20with%20glowing%20message%20bubbles%2C%20dark%20background%2C%20holographic%20effects%2C%20neon%20blue%20and%20violet%20gradients%2C%20modern%20typography%2C%20and%20clean%20minimalist%20design&width=400&height=300&seq=gallery3&orientation=landscape',
      description: 'Innovative AI-powered chat interface design'
    },
    {
      id: 4,
      title: 'Digital Art Portrait',
      category: 'art',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20digital%20art%20portrait%20with%20cyberpunk%20aesthetic%2C%20neon%20blue%20and%20violet%20lighting%2C%20holographic%20elements%2C%20geometric%20patterns%2C%20and%20abstract%20technological%20background&width=300&height=400&seq=gallery4&orientation=portrait',
      description: 'Cyberpunk-inspired digital art creation'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      category: 'web',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Modern%20social%20media%20platform%20interface%20with%20dark%20theme%2C%20post%20feeds%2C%20user%20profiles%2C%20story%20highlights%2C%20and%20futuristic%20design%20elements%20with%20blue%20violet%20accents&width=400&height=300&seq=gallery5&orientation=landscape',
      description: 'Next-generation social media platform'
    },
    {
      id: 6,
      title: 'Task Management App',
      category: 'mobile',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Sleek%20task%20management%20mobile%20app%20with%20dark%20interface%2C%20organized%20task%20cards%2C%20progress%20indicators%2C%20calendar%20view%2C%20and%20modern%20UI%20design%20with%20neon%20accents&width=300&height=400&seq=gallery6&orientation=portrait',
      description: 'Productivity app with beautiful animations'
    },
    {
      id: 7,
      title: 'Admin Dashboard',
      category: 'ui',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20admin%20dashboard%20interface%20with%20data%20visualization%2C%20charts%2C%20statistics%2C%20dark%20theme%2C%20blue%20violet%20gradients%2C%20and%20modern%20glass%20morphism%20design%20elements&width=400&height=300&seq=gallery7&orientation=landscape',
      description: 'Comprehensive admin panel design'
    },
    {
      id: 8,
      title: 'Abstract Composition',
      category: 'art',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Abstract%20digital%20art%20composition%20with%20geometric%20shapes%2C%20flowing%20lines%2C%20blue%20violet%20gradients%2C%20holographic%20effects%2C%20and%20futuristic%20technological%20patterns&width=400&height=300&seq=gallery8&orientation=squarish',
      description: 'Generative art with algorithmic patterns'
    },
    {
      id: 9,
      title: 'Weather App Design',
      category: 'mobile',
      type: 'image',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20weather%20app%20interface%20with%20dark%20theme%2C%20animated%20weather%20icons%2C%20forecast%20cards%2C%20location%20display%2C%20and%20modern%20UI%20design%20with%20blue%20violet%20accents&width=300&height=400&seq=gallery9&orientation=portrait',
      description: 'Elegant weather application interface'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
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
                Gallery
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A showcase of my creative work and design projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-800/70'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>

            {filteredItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No items found in this category.
                </p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-20 text-center"
            >
              <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                <h3 className="text-2xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
                  Like What You See?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Let's collaborate on your next creative project
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-medium hover:from-violet-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-violet-500/25 whitespace-nowrap">
                  Start a Project
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
