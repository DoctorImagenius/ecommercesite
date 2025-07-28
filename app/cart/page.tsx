
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '../../components/CartProvider';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <i className="ri-shopping-cart-line text-8xl text-gray-400 mb-6"></i>
          <h1 className="text-3xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like you haven't added any items to your cart yet
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
              Shopping Cart
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Review your selected items
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold font-orbitron text-gray-900 dark:text-white">
                    Cart Items ({cart.length})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 transition-colors whitespace-nowrap"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}-${item.color}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl border border-gray-200/20 dark:border-gray-600/20"
                    >
                      <div className="w-20 h-20 bg-white/50 dark:bg-gray-600/50 rounded-lg overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold font-poppins text-gray-900 dark:text-white">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Size: {item.size} | Color: {item.color}
                        </p>
                        <p className="text-pink-600 dark:text-pink-400 font-bold">
                          ${item.product.price}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                          <i className="ri-add-line"></i>
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-gray-900 dark:text-white">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                          className="text-red-600 hover:text-red-700 transition-colors text-sm mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 p-6 sticky top-24"
              >
                <h2 className="text-xl font-bold font-orbitron mb-6 text-gray-900 dark:text-white">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {getCartTotal() > 100 ? 'Free' : '$9.99'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tax</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      ${(getCartTotal() * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                      <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
                        ${(getCartTotal() + (getCartTotal() > 100 ? 0 : 9.99) + (getCartTotal() * 0.08)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 mb-4 whitespace-nowrap">
                  Proceed to Checkout
                </button>

                <Link
                  href="/shop"
                  className="block w-full py-3 px-4 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-300 text-center border border-gray-200/20 dark:border-gray-600/20 whitespace-nowrap"
                >
                  Continue Shopping
                </Link>

                {getCartTotal() < 100 && (
                  <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Add ${(100 - getCartTotal()).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
