
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../components/AuthProvider';
import { useProducts } from '../../components/ProductProvider';
import { Product } from '../../components/CartProvider';

export default function Admin() {
  const { user, isAdmin } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('products');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
    inStock: true,
    sizes: '',
    colors: ''
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      router.push('/signin');
    }
  }, [user, isAdmin, router]);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      category: product.category,
      image: product.image,
      inStock: product.inStock,
      sizes: product.sizes.join(', '),
      colors: product.colors.join(', ')
    });
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setFormData({
      name: '',
      price: '',
      description: '',
      category: '',
      image: '',
      inStock: true,
      sizes: '',
      colors: ''
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  const handleSave = () => {
    const newProduct: Product = {
      id: selectedProduct?.id || Date.now().toString(),
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      category: formData.category,
      image: formData.image,
      inStock: formData.inStock,
      sizes: formData.sizes.split(',').map(s => s.trim()).filter(s => s),
      colors: formData.colors.split(',').map(c => c.trim()).filter(c => c)
    };

    if (selectedProduct) {
      updateProduct(newProduct);
    } else {
      addProduct(newProduct);
    }

    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
            Access Denied
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            You need admin privileges to access this page
          </p>
        </div>
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-gray-900 dark:text-white">
              Admin Panel
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your Maria C store
            </p>
          </motion.div>

          <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 overflow-hidden">
            <div className="flex border-b border-gray-200/20 dark:border-gray-700/20">
              <button
                onClick={() => setActiveTab('products')}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${
                  activeTab === 'products'
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Products ({products.length})
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${
                  activeTab === 'orders'
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Orders
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'products' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold font-orbitron text-gray-900 dark:text-white">
                      Manage Products
                    </h2>
                    <button
                      onClick={handleAdd}
                      className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-purple-500/25 whitespace-nowrap"
                    >
                      <i className="ri-add-line mr-2"></i>
                      Add Product
                    </button>
                  </div>

                  <div className="grid gap-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white/50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-200/20 dark:border-gray-600/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-white/50 dark:bg-gray-600/50 rounded-lg overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                              ${product.price} | {product.category}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                              {product.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                product.inStock 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              }`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(product)}
                              className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                            >
                              <i className="ri-edit-line"></i>
                            </button>
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold font-orbitron mb-6 text-gray-900 dark:text-white">
                    Recent Orders
                  </h2>
                  <div className="text-center py-12">
                    <i className="ri-shopping-bag-line text-6xl text-gray-400 mb-4"></i>
                    <p className="text-gray-600 dark:text-gray-400">No orders yet</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl max-w-md w-full border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6 text-center font-orbitron">
              {selectedProduct ? 'Edit Product' : 'Add New Product'}
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Product Name"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                required
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                step="0.01"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                required
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
                rows={3}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-sm"
                required
              />
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Category"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                required
              />
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                required
              />
              <input
                type="text"
                name="sizes"
                value={formData.sizes}
                onChange={handleInputChange}
                placeholder="Sizes (comma separated)"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              />
              <input
                type="text"
                name="colors"
                value={formData.colors}
                onChange={handleInputChange}
                placeholder="Colors (comma separated)"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-gray-700 dark:text-gray-300">In Stock</label>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 whitespace-nowrap"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
