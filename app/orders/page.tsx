
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../components/AuthProvider';
import { useRouter } from 'next/navigation';

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

export default function Orders() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin');
      return;
    }

    // Mock orders data - in real app, this would be fetched from API
    const mockOrders: Order[] = [
      {
        id: 'ORD-001',
        date: '2024-01-15',
        status: 'delivered',
        total: 299.99,
        items: [
          {
            id: '1',
            name: 'Elegant Evening Dress',
            price: 199.99,
            quantity: 1,
            image: 'https://readdy.ai/api/search-image?query=elegant%20black%20evening%20dress%20on%20white%20background%2C%20fashion%20photography%2C%20luxury%20clothing%2C%20minimalist%20style%2C%20high%20quality%20fabric&width=400&height=400&seq=1&orientation=squarish'
          },
          {
            id: '2',
            name: 'Designer Handbag',
            price: 100.00,
            quantity: 1,
            image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20handbag%20on%20white%20background%2C%20designer%20bag%2C%20fashion%20accessory%2C%20elegant%20style%2C%20premium%20quality&width=400&height=400&seq=2&orientation=squarish'
          }
        ]
      },
      {
        id: 'ORD-002',
        date: '2024-01-20',
        status: 'shipped',
        total: 159.99,
        items: [
          {
            id: '3',
            name: 'Silk Scarf',
            price: 79.99,
            quantity: 1,
            image: 'https://readdy.ai/api/search-image?query=luxury%20silk%20scarf%20on%20white%20background%2C%20elegant%20pattern%2C%20fashion%20accessory%2C%20premium%20quality%2C%20colorful%20design&width=400&height=400&seq=3&orientation=squarish'
          },
          {
            id: '4',
            name: 'Pearl Necklace',
            price: 80.00,
            quantity: 1,
            image: 'https://readdy.ai/api/search-image?query=elegant%20pearl%20necklace%20on%20white%20background%2C%20luxury%20jewelry%2C%20classic%20design%2C%20premium%20quality%2C%20timeless%20style&width=400&height=400&seq=4&orientation=squarish'
          }
        ]
      },
      {
        id: 'ORD-003',
        date: '2024-01-25',
        status: 'processing',
        total: 89.99,
        items: [
          {
            id: '5',
            name: 'Casual Blouse',
            price: 89.99,
            quantity: 1,
            image: 'https://readdy.ai/api/search-image?query=elegant%20casual%20blouse%20on%20white%20background%2C%20fashion%20clothing%2C%20modern%20style%2C%20comfortable%20fit%2C%20quality%20fabric&width=400&height=400&seq=5&orientation=squarish'
          }
        ]
      }
    ];

    setOrders(mockOrders);
  }, [isAuthenticated, router]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400';
      case 'shipped':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'pending':
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400';
      case 'cancelled':
        return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'ri-check-double-line';
      case 'shipped':
        return 'ri-truck-line';
      case 'processing':
        return 'ri-time-line';
      case 'pending':
        return 'ri-hourglass-line';
      case 'cancelled':
        return 'ri-close-circle-line';
      default:
        return 'ri-question-line';
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
              My Orders
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track your order history and status
            </p>
          </motion.div>

          {orders.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center py-20"
            >
              <i className="ri-shopping-bag-line text-8xl text-gray-400 mb-6"></i>
              <h2 className="text-2xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
                No Orders Yet
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                You haven't placed any orders yet. Start shopping to see your orders here.
              </p>
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 whitespace-nowrap"
              >
                Start Shopping
              </motion.a>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 rounded-2xl backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 shadow-xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div>
                        <h3 className="text-xl font-bold font-orbitron text-gray-900 dark:text-white">
                          Order #{order.id}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(order.status)}`}
                      >
                        <i className={getStatusIcon(order.status)}></i>
                        <span className="capitalize">{order.status}</span>
                      </span>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          ${order.total.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Total
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200/30 dark:border-gray-700/30 pt-4">
                    <h4 className="text-lg font-semibold font-orbitron mb-4 text-gray-900 dark:text-white">
                      Items ({order.items.length})
                    </h4>
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-white/50 dark:bg-gray-600/50 rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 dark:text-white">
                              {item.name}
                            </h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900 dark:text-white">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200/30 dark:border-gray-700/30 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                        View Details
                      </button>
                      {order.status === 'delivered' && (
                        <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 whitespace-nowrap">
                          Reorder
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
