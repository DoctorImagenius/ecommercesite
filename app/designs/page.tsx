
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Designs() {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  const designs = [
    {
      id: 1,
      title: 'Elegance Redefined',
      description: 'A sophisticated evening gown that combines classic silhouettes with modern details',
      image: 'https://readdy.ai/api/search-image?query=elegant%20evening%20gown%20design%20sketch%2C%20fashion%20illustration%2C%20sophisticated%20dress%20design%2C%20luxury%20fashion%20artwork%2C%20designer%20sketches%2C%20high-end%20fashion%20drawing%2C%20professional%20fashion%20design%2C%20artistic%20illustration&width=400&height=600&seq=design1&orientation=portrait',
      category: 'Evening Wear',
      season: 'Fall 2024'
    },
    {
      id: 2,
      title: 'Contemporary Professional',
      description: 'Modern blazer design that empowers women in professional settings',
      image: 'https://readdy.ai/api/search-image?query=professional%20blazer%20design%20sketch%2C%20business%20attire%20illustration%2C%20contemporary%20workwear%20design%2C%20fashion%20sketch%2C%20modern%20professional%20clothing%20design%2C%20sophisticated%20business%20wear%20artwork%2C%20designer%20illustration&width=400&height=600&seq=design2&orientation=portrait',
      category: 'Workwear',
      season: 'Spring 2024'
    },
    {
      id: 3,
      title: 'Flowing Grace',
      description: 'A maxi dress that captures the essence of feminine grace and comfort',
      image: 'https://readdy.ai/api/search-image?query=flowing%20maxi%20dress%20design%20sketch%2C%20elegant%20dress%20illustration%2C%20feminine%20fashion%20design%2C%20graceful%20dress%20artwork%2C%20fashion%20designer%20sketch%2C%20sophisticated%20dress%20drawing%2C%20luxury%20fashion%20illustration&width=400&height=600&seq=design3&orientation=portrait',
      category: 'Casual Wear',
      season: 'Summer 2024'
    },
    {
      id: 4,
      title: 'Timeless Accessories',
      description: 'Luxury handbag collection inspired by architectural elements',
      image: 'https://readdy.ai/api/search-image?query=luxury%20handbag%20design%20sketch%2C%20fashion%20accessory%20illustration%2C%20premium%20bag%20design%2C%20elegant%20handbag%20artwork%2C%20designer%20accessory%20sketch%2C%20sophisticated%20bag%20illustration%2C%20luxury%20fashion%20design&width=400&height=600&seq=design4&orientation=portrait',
      category: 'Accessories',
      season: 'All Season'
    },
    {
      id: 5,
      title: 'Winter Elegance',
      description: 'Luxurious coat design combining warmth with sophisticated style',
      image: 'https://readdy.ai/api/search-image?query=elegant%20winter%20coat%20design%20sketch%2C%20luxury%20outerwear%20illustration%2C%20sophisticated%20coat%20design%2C%20premium%20outerwear%20artwork%2C%20fashion%20designer%20sketch%2C%20elegant%20coat%20drawing%2C%20luxury%20fashion%20illustration&width=400&height=600&seq=design5&orientation=portrait',
      category: 'Outerwear',
      season: 'Winter 2024'
    },
    {
      id: 6,
      title: 'Artisan Knitwear',
      description: 'Hand-crafted cashmere pieces with intricate patterns and textures',
      image: 'https://readdy.ai/api/search-image?query=cashmere%20knitwear%20design%20sketch%2C%20luxury%20sweater%20illustration%2C%20premium%20knit%20design%2C%20elegant%20knitwear%20artwork%2C%20sophisticated%20sweater%20design%2C%20luxury%20knit%20fashion%20illustration%2C%20artisan%20clothing%20design&width=400&height=600&seq=design6&orientation=portrait',
      category: 'Knitwear',
      season: 'Winter 2024'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Design Studio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore the creative process behind our luxury fashion pieces
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white/50 dark:bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedDesign(design.id)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {design.season}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold font-poppins text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {design.title}
                    </h3>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                      {design.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {design.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold font-orbitron mb-6">
              Custom Design Service
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Work with our designers to create bespoke pieces tailored to your unique style and preferences.
            </p>
            <button className="px-8 py-4 bg-white text-pink-600 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg whitespace-nowrap">
              Request Custom Design
            </button>
          </motion.div>
        </div>
      </section>

      {selectedDesign && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold font-orbitron text-gray-900 dark:text-white">
                  Design Details
                </h3>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              {designs.find(d => d.id === selectedDesign) && (
                <div className="space-y-6">
                  <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={designs.find(d => d.id === selectedDesign)!.image}
                      alt={designs.find(d => d.id === selectedDesign)!.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold font-poppins mb-2 text-gray-900 dark:text-white">
                      {designs.find(d => d.id === selectedDesign)!.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {designs.find(d => d.id === selectedDesign)!.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                        {designs.find(d => d.id === selectedDesign)!.category}
                      </span>
                      <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        {designs.find(d => d.id === selectedDesign)!.season}
                      </span>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 whitespace-nowrap">
                      View Similar Products
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
