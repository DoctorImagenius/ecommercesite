
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '../../components/CartProvider';
import ProductCard from '../../components/ProductCard';

export default function Favourites() {
  const { favourites } = useCart();

  if (favourites.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <i className="ri-heart-line text-8xl text-gray-400 mb-6"></i>
          <h1 className="text-3xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
            No Favourites Yet
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Start adding items to your favourites to see them here
          </p>
          <Link
            href="/shop"
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 whitespace-nowrap"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

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
              Your Favourites
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {favourites.length} item{favourites.length !== 1 ? 's' : ''} in your wishlist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {favourites.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
