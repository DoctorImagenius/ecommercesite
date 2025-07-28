
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
  sizes: string[];
  colors: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextType {
  cart: CartItem[];
  favourites: Product[];
  addToCart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  addToFavourites: (product: Product) => void;
  removeFromFavourites: (productId: string) => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  isFavourite: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favourites, setFavourites] = useState<Product[]>([]);
  const { user } = useAuth();

  // Load user-specific cart data when user changes
  useEffect(() => {
    if (user) {
      const userCartKey = `cart_${user.id}`;
      const userFavouritesKey = `favourites_${user.id}`;
      
      const savedCart = localStorage.getItem(userCartKey);
      const savedFavourites = localStorage.getItem(userFavouritesKey);
      
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        setCart([]);
      }
      
      if (savedFavourites) {
        setFavourites(JSON.parse(savedFavourites));
      } else {
        setFavourites([]);
      }
    } else {
      // Clear cart and favourites when user logs out
      setCart([]);
      setFavourites([]);
    }
  }, [user]);

  // Save cart data when cart changes
  useEffect(() => {
    if (user) {
      const userCartKey = `cart_${user.id}`;
      localStorage.setItem(userCartKey, JSON.stringify(cart));
    }
  }, [cart, user]);

  // Save favourites data when favourites change
  useEffect(() => {
    if (user) {
      const userFavouritesKey = `favourites_${user.id}`;
      localStorage.setItem(userFavouritesKey, JSON.stringify(favourites));
    }
  }, [favourites, user]);

  const addToCart = (product: Product, quantity: number, size: string, color: string) => {
    setCart(prev => {
      const existingItem = prev.find(item => 
        item.product.id === product.id && 
        item.size === size && 
        item.color === color
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prev, { product, quantity, size, color }];
    });
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setCart(prev => prev.filter(item => 
      !(item.product.id === productId && item.size === size && item.color === color)
    ));
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    
    setCart(prev => prev.map(item =>
      item.product.id === productId && item.size === size && item.color === color
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addToFavourites = (product: Product) => {
    setFavourites(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const removeFromFavourites = (productId: string) => {
    setFavourites(prev => prev.filter(item => item.id !== productId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const isFavourite = (productId: string) => {
    return favourites.some(item => item.id === productId);
  };

  const value = {
    cart,
    favourites,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToFavourites,
    removeFromFavourites,
    getCartTotal,
    getCartItemsCount,
    isFavourite
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
