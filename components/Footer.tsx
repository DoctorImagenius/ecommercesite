
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold font-pacifico bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Maria C
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Premium fashion collection for the modern woman. Discover luxury pieces that define elegance and sophistication.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <i className="ri-facebook-fill text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <i className="ri-instagram-line text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <i className="ri-twitter-fill text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <i className="ri-pinterest-fill text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-orbitron mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">About</Link></li>
              <li><Link href="/collections" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Collections</Link></li>
              <li><Link href="/shop" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Shop</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-orbitron mb-4 text-gray-900 dark:text-white">Customer Care</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Returns</Link></li>
              <li><Link href="/size-guide" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Size Guide</Link></li>
              <li><Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Maria C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
