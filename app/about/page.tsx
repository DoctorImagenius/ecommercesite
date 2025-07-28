
'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Maria C
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the story behind our luxury fashion brand
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square bg-white/50 dark:bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                <img
                  src="https://readdy.ai/api/search-image?query=elegant%20fashion%20designer%20woman%20in%20sophisticated%20studio%20environment%2C%20premium%20fashion%20atelier%2C%20luxury%20brand%20founder%20portrait%2C%20professional%20photography%2C%20modern%20minimalist%20design%2C%20high-end%20fashion%20industry%2C%20creative%20workspace%20atmosphere&width=600&height=600&seq=about-hero&orientation=squarish"
                  alt="Maria C - Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-orbitron text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Maria C was born from a vision to create timeless pieces that celebrate the modern woman's strength and elegance. Founded in 2018, our brand has become synonymous with luxury, quality, and sophisticated design.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every piece in our collection is carefully crafted using premium materials and artisanal techniques, ensuring that each garment not only looks beautiful but also stands the test of time.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe that fashion should be an expression of individuality, confidence, and grace. Our designs are inspired by the diverse stories of women around the world, creating pieces that empower and inspire.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: 'ri-award-line',
                title: 'Premium Quality',
                description: 'We use only the finest materials and work with skilled artisans to create exceptional pieces.'
              },
              {
                icon: 'ri-leaf-line',
                title: 'Sustainable Fashion',
                description: 'Committed to ethical practices and sustainable manufacturing processes.'
              },
              {
                icon: 'ri-heart-line',
                title: 'Crafted with Love',
                description: 'Every piece is designed with passion and attention to detail.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold font-orbitron mb-6">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of a community that celebrates elegance, empowerment, and timeless style.
            </p>
            <button className="px-8 py-4 bg-white text-pink-600 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg whitespace-nowrap">
              Subscribe to Newsletter
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
