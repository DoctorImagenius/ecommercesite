
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product, useCart } from './CartProvider';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToFavourites, isFavourite } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleFavouriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    addToFavourites(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/50 dark:bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {!product.inStock && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold font-poppins text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              {product.name}
            </h3>
            <button
              onClick={handleFavouriteClick}
              className={`p-2 rounded-full transition-all duration-300 ${
                isFavourite(product.id)
                  ? 'text-pink-600 bg-pink-100 dark:bg-pink-900/30'
                  : 'text-gray-400 hover:text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900/30'
              }`}
            >
              <i className={`${isFavourite(product.id) ? 'ri-heart-fill' : 'ri-heart-line'} text-lg`}></i>
            </button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold font-orbitron text-pink-600 dark:text-pink-400">
                ${product.price}
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {product.category}
              </p>
            </div>
            
            <div className={`flex space-x-1 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}>
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                  style={{
                    backgroundColor: color.toLowerCase().includes('black') ? '#000' :
                                   color.toLowerCase().includes('white') ? '#fff' :
                                   color.toLowerCase().includes('navy') ? '#1e3a8a' :
                                   color.toLowerCase().includes('red') ? '#dc2626' :
                                   color.toLowerCase().includes('pink') ? '#ec4899' :
                                   color.toLowerCase().includes('purple') ? '#a855f7' :
                                   color.toLowerCase().includes('blue') ? '#3b82f6' :
                                   color.toLowerCase().includes('green') ? '#10b981' :
                                   color.toLowerCase().includes('yellow') ? '#f59e0b' :
                                   color.toLowerCase().includes('orange') ? '#f97316' :
                                   color.toLowerCase().includes('gray') ? '#6b7280' :
                                   color.toLowerCase().includes('brown') ? '#a3765a' :
                                   color.toLowerCase().includes('beige') ? '#f5f5dc' :
                                   '#9ca3af'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
