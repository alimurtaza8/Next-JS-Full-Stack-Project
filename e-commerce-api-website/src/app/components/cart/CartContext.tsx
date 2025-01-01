"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { Product } from '../types/product';

// Types
type CartItem = {
  productId: number;
  quantity: number;
  product: Product;
};

type CartState = {
  items: CartItem[];
  total: number;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } };

// Context
export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

// Reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.productId === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.productId === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price
        };
      }

      return {
        ...state,
        items: [...state.items, { productId: action.payload.id, quantity: 1, product: action.payload }],
        total: state.total + action.payload.price
      };
    }

    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.productId === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.productId !== action.payload),
        total: state.total - (itemToRemove ? itemToRemove.product.price * itemToRemove.quantity : 0)
      };

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.productId === productId);
      
      if (!item) return state;

      const quantityDiff = quantity - item.quantity;
      
      return {
        ...state,
        items: state.items.map(item =>
          item.productId === productId
            ? { ...item, quantity }
            : item
        ),
        total: state.total + (item.product.price * quantityDiff)
      };
    }

    default:
      return state;
  }
}

// Provider Component
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Cart Drawer Component
export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('CartContext not found');
  const { state, dispatch } = cart;

  return (
    <div 
      className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-400" />
              <p className="mt-2 text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.productId} className="flex items-center space-x-4 border-b pb-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-gray-500">${item.product.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { productId: item.productId, quantity: Math.max(0, item.quantity - 1) }
                        })}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { productId: item.productId, quantity: item.quantity + 1 }
                        })}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.productId })}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${state.total.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            disabled={state.items.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}