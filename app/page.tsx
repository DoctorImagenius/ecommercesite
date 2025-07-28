
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/products';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://readdy.ai/api/search-image?query=luxury%20fashion%20boutique%20interior%20with%20elegant%20clothing%20displays%2C%20sophisticated%20lighting%2C%20premium%20retail%20environment%2C%20modern%20minimalist%20design%2C%20high-end%20fashion%20store%20atmosphere%2C%20clean%20aesthetic%2C%20professional%20photography&width=1920&height=1080&seq=hero&orientation=landscape")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-orbitron mb-6 text-white">
              Maria C
            </h1>
            <p className="text-xl md:text-2xl font-poppins mb-8 text-white/90 max-w-2xl mx-auto">
              Discover luxury fashion that defines elegance and sophistication. Premium collections for the modern woman.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/shop"
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 whitespace-nowrap"
            >
              Shop Collection
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 whitespace-nowrap"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-gray-900 dark:text-white">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover our carefully curated selection of premium fashion pieces
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
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
      
      <section className="py-20 px-4 bg-white/30 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-truck-line',
                title: 'Free Shipping',
                description: 'Free shipping on orders over $100'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Quality Guarantee',
                description: 'Premium quality materials and craftsmanship'
              },
              {
                icon: 'ri-customer-service-line',
                title: '24/7 Support',
                description: 'Dedicated customer service team'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
