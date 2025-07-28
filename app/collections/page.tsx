
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories } from '../../lib/products';

export default function Collections() {
  const collections = [
    {
      name: 'Evening Wear',
      description: 'Elegant gowns and formal dresses for special occasions',
      image: 'https://readdy.ai/api/search-image?query=luxury%20evening%20wear%20collection%2C%20elegant%20formal%20dresses%20and%20gowns%2C%20sophisticated%20evening%20fashion%2C%20premium%20quality%20fabrics%2C%20glamorous%20designs%2C%20high-end%20fashion%20photography%2C%20clean%20background%2C%20professional%20styling&width=600&height=400&seq=evening&orientation=landscape',
      itemCount: 24
    },
    {
      name: 'Workwear',
      description: 'Professional attire that combines style with functionality',
      image: 'https://readdy.ai/api/search-image?query=professional%20workwear%20collection%2C%20business%20attire%20for%20women%2C%20elegant%20blazers%20and%20suits%2C%20office%20fashion%2C%20contemporary%20professional%20clothing%2C%20sophisticated%20styling%2C%20clean%20background%2C%20modern%20design&width=600&height=400&seq=workwear&orientation=landscape',
      itemCount: 18
    },
    {
      name: 'Casual Wear',
      description: 'Comfortable yet stylish pieces for everyday elegance',
      image: 'https://readdy.ai/api/search-image?query=casual%20wear%20collection%2C%20comfortable%20elegant%20clothing%2C%20everyday%20fashion%20pieces%2C%20relaxed%20style%2C%20premium%20casual%20attire%2C%20modern%20lifestyle%20clothing%2C%20sophisticated%20casual%20wear%2C%20clean%20background%20styling&width=600&height=400&seq=casual&orientation=landscape',
      itemCount: 32
    },
    {
      name: 'Accessories',
      description: 'Luxury handbags, jewelry, and accessories to complete your look',
      image: 'https://readdy.ai/api/search-image?query=luxury%20fashion%20accessories%20collection%2C%20premium%20handbags%20and%20jewelry%2C%20elegant%20accessories%20display%2C%20sophisticated%20styling%2C%20high-end%20fashion%20accessories%2C%20luxury%20brand%20photography%2C%20clean%20background%2C%20professional%20presentation&width=600&height=400&seq=accessories&orientation=landscape',
      itemCount: 45
    },
    {
      name: 'Outerwear',
      description: 'Coats, jackets, and outerwear for all seasons',
      image: 'https://readdy.ai/api/search-image?query=luxury%20outerwear%20collection%2C%20elegant%20coats%20and%20jackets%2C%20premium%20outerwear%20fashion%2C%20sophisticated%20styling%2C%20high-quality%20materials%2C%20fashion%20photography%2C%20clean%20background%2C%20professional%20presentation&width=600&height=400&seq=outerwear&orientation=landscape',
      itemCount: 16
    },
    {
      name: 'Knitwear',
      description: 'Soft cashmere and premium knitwear pieces',
      image: 'https://readdy.ai/api/search-image?query=luxury%20knitwear%20collection%2C%20cashmere%20sweaters%20and%20cardigans%2C%20premium%20knit%20clothing%2C%20cozy%20elegant%20fashion%2C%20sophisticated%20knitwear%2C%20high-quality%20fabrics%2C%20fashion%20photography%2C%20clean%20background%20styling&width=600&height=400&seq=knitwear&orientation=landscape',
      itemCount: 22
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
              Our Collections
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our carefully curated collections designed for the modern woman
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white/50 dark:bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full backdrop-blur-sm">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {collection.itemCount} items
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins mb-3 text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <Link
                    href={`/shop?category=${encodeURIComponent(collection.name)}`}
                    className="inline-flex items-center text-pink-600 dark:text-pink-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                  >
                    Explore Collection
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              href="/shop"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 whitespace-nowrap"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
