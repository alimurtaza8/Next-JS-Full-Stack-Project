"use client";

import React, { useState,useContext } from 'react';
import { useRouter } from 'next/navigation';
// import { Star, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
// import { Product } from '@/app/components/types/product';
import { CartContext } from '@/app/components/cart/CartContext';

// Enhanced Product Details Component
// const ProductDetails = ({ product }: { product: Product }) => {
//   const router = useRouter();
//   const [selectedSize, setSelectedSize] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const cart = useContext(CartContext);

//   const sizes = ['S', 'M', 'L', 'XL'];

//   const handleAddToCart = () => {
//     if (!cart) return;
//     cart.dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } });
//     router.push('/checkout');
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <button 
//         onClick={() => router.back()}
//         className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
//       >
//         <ArrowLeft className="h-5 w-5 mr-2" />
//         Back to Products
//       </button>

//       <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
//         <div className="lg:max-w-lg lg:self-end">
//           <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//           <div className="mt-4 grid grid-cols-4 gap-2">
//             {[1, 2, 3, 4].map((i) => (
//               <img
//                 key={i}
//                 src={product.image}
//                 alt={`View ${i}`}
//                 className="rounded-lg cursor-pointer hover:opacity-75"
//               />
//             ))}
//           </div>
//         </div>

//         <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
//           <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
//             {product.name}
//           </h1>
          
//           <div className="mt-3 flex items-center">
//             <div className="flex items-center">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`h-5 w-5 ${
//                     i < product.rating ? 'text-yellow-400' : 'text-gray-200'
//                   }`}
//                   fill="currentColor"
//                 />
//               ))}
//             </div>
//             <span className="ml-3 text-gray-500">{product.rating} out of 5 stars</span>
//           </div>

//           <div className="mt-6">
//             <h3 className="sr-only">Description</h3>
//             <p className="text-base text-gray-700">{product.description}</p>
//           </div>

//           <div className="mt-8">
//             <h2 className="text-lg font-medium text-gray-900">Size</h2>
//             <div className="mt-4 flex space-x-3">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   className={`${
//                     selectedSize === size
//                       ? 'bg-blue-600 text-white'
//                       : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//                   } px-6 py-2 rounded-md font-medium`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8 flex items-center space-x-4">
//             <div className="flex items-center border rounded-md">
//               <button 
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               >
//                 -
//               </button>
//               <span className="px-4 py-2 border-x">{quantity}</span>
//               <button 
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 onClick={() => setQuantity(quantity + 1)}
//               >
//                 +
//               </button>
//             </div>
            
//             <button 
//               onClick={handleAddToCart}
//               className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
//             >
//               Add to Cart & Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Checkout Component
const Checkout = () => {
  const [step, setStep] = useState(1);
  const cart = useContext(CartContext);
  const router = useRouter();

  const steps = [
    { id: 1, name: 'Shipping' },
    { id: 2, name: 'Payment' },
    { id: 3, name: 'Review' },
  ];

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle order submission
      router.push('/order-confirmation');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Checkout Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {steps.map((s) => (
            <div key={s.id} className="flex items-center">
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full
                ${step >= s.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}
              `}>
                {s.id}
              </div>
              <span className="ml-2 text-gray-900">{s.name}</span>
              {s.id !== steps.length && (
                <div className="w-24 h-1 mx-4 bg-gray-200">
                  <div 
                    className="h-full bg-blue-600 transition-all"
                    style={{ width: step > s.id ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({
                        ...shippingInfo,
                        firstName: e.target.value
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({
                        ...shippingInfo,
                        lastName: e.target.value
                      })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value
                    })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({
                        ...shippingInfo,
                        city: e.target.value
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Postal code
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      value={shippingInfo.postalCode}
                      onChange={(e) => setShippingInfo({
                        ...shippingInfo,
                        postalCode: e.target.value
                      })}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card number
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="4242 4242 4242 4242"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiration date
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
                {cart?.state.items.map((item) => (
                  <div key={item.productId} className="flex items-center space-x-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.product.name}</h4>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                {step === 3 ? 'Place Order' : 'Continue'}
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="mt-10 lg:mt-0">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">${cart?.state.total.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="font-medium">$10.00</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-900">Total</p>
                  <p className="text-lg font-medium text-gray-900">
                    {/* ${(cart?.state.total + 10).toFixed(2)} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout ;