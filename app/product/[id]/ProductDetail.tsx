
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../components/CartProvider';
import { useProducts } from '../../../components/ProductProvider';
import { Product } from '../../../components/CartProvider';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const { getProductById } = useProducts();
  const { addToCart, addToFavourites, isFavourite } = useCart();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProduct = getProductById(productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0] || '');
      setSelectedColor(foundProduct.colors[0] || '');
    }
    setIsLoading(false);
  }, [productId, getProductById]);

  const handleAddToCart = () => {
    if (!product) return;
    
    if (product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    
    if (product.colors.length > 0 && !selectedColor) {
      alert('Please select a color');
      return;
    }
    
    addToCart(product, quantity, selectedSize, selectedColor);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    successMessage.textContent = 'Added to cart!';
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      document.body.removeChild(successMessage);
    }, 3000);
  };

  const handleAddToFavourites = () => {
    if (!product) return;
    addToFavourites(product);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
            Product Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.push('/shop')}
            className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 whitespace-nowrap"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[600px] object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-3xl font-bold text-pink-600">${product.price}</p>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.inStock
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 p-6">
                <div className="space-y-6">
                  {product.sizes.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Size
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                              selectedSize === size
                                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                                : 'bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70 backdrop-blur-sm'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.colors.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Color
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                              selectedColor === color
                                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                                : 'bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70 backdrop-blur-sm'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Quantity
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-white/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span className="px-4 py-2 text-lg font-medium text-gray-900 dark:text-white">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                        >
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        Total: ${totalPrice.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-gray-200/20 dark:border-gray-700/20">
                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className="flex-1 py-3 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      <i className="ri-shopping-cart-line mr-2"></i>
                      Add to Cart
                    </button>
                    <button
                      onClick={handleAddToFavourites}
                      className={`p-3 rounded-lg font-medium transition-all duration-300 ${
                        isFavourite(product.id)
                          ? 'bg-pink-600 text-white shadow-lg shadow-pink-500/25'
                          : 'bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70 backdrop-blur-sm'
                      }`}
                    >
                      <i className={`ri-heart-${isFavourite(product.id) ? 'fill' : 'line'}`}></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 p-6">
                <h3 className="text-xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
                  Product Details
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><span className="font-semibold">Category:</span> {product.category}</p>
                  <p><span className="font-semibold">Available Sizes:</span> {product.sizes.join(', ')}</p>
                  <p><span className="font-semibold">Available Colors:</span> {product.colors.join(', ')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
