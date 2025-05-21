"use client";

import Link from 'next/link';
// import Image from 'next/image';
import React from 'react';
// import { useRouter } from 'next/router';
// 
const ProductsList: React.FC = () => {

  // const router = useRouter();
  // const { id } = router.query;
  const products = [
    {
      id: 'allevia-120mg',
      title: 'Allevia - 120mg',
      price: '£10.00',
      image: '/images/products/allevia.webp',
      link: '/products/allevia-120mg',
    },
    {
      id: 'clarithromycin',
      title: 'Clarithromycin',
      price: '£15.00',
      image: '/images/products/clarith.webp',
      link: '/products/clarithromycin',
    },
    {
      id: 'eczema-cream',
      title: 'Eczema Cream',
      price: '£12.00',
      image: '/images/products/betnovate.webp',
      link: '/products/eczema-cream',
    },
    {
      id: 'fexofenadine-120mg',
      title: 'Fexofenadine 120mg',
      price: '£10.00',
      image: '/images/products/fexofenadine250mg.webp',
      link: '/products/fexofenadine-120mg',
    },


    {
        id: 'fexofenadine-180mg',
        title: 'Fexofenadine 180mg',
        price: '£15.00',
        image: '/images/products/fexofenadine.webp',
        link: '/products/fexofenadine-180mg',
      },
      {
        id: 'finasteride',
        title: 'Finasteride',
        price: '£13.00',
        image: '/images/products/finasteride.webp',
        link: '/products/finasteride',
      },
      {
        id: 'melatonin-3mg',
        title: 'Melatonin 3mg',
        price: '£15.00',
        image: '/images/products/melatonin.webp',
        link: '/products/melatonin-3mg',
      },
      {
        id: 'mounjaro-10mg',
        title: 'Mounjaro 10mg',
        price: '£180.00',
        image: '/images/products/mounjaro.webp',
        link: '/products/mounjaro-10mg',
      },


      {
        id: 'mounjaro-12.5mg',
        title: 'Mounjaro 12.5mg',
        price: '£200.00',
        image: '/images/products/mounjaro.webp',
        link: '/products/mounjaro-12.5mg',
      },

      {
        id: 'mounjaro-15mg',
        title: 'Mounjaro 15mg',
        price: '£210.00',
        image: '/images/products/mounjaro.webp',
        link: '/products/mounjaro-15mg',
      },

      {
        id: 'mounjaro-2.5mg',
        title: 'Mounjaro 2.5mg',
        price: '£125.00',
        image: '/images/products/mounjaro.webp',
        link: '/products/mounjaro-2.5mg',
      },

      {
        id: 'mounjaro-5mg',
        title: 'Mounjaro 5mg',
        price: '£140.00',
        image: '/images/products/mounjaro.webp',
        link: '/products/mounjaro-5mg',
      },

      {
        id: 'mounjaro-7.5mg',
        title: 'Mounjaro 7.5mg',
        price: '£165.00',
        image: '/images/products/mounjaro.webp',
        link: '/products/mounjaro-7.5mg',
      },


      {
        id: 'nitrofurantoin-100mg',
        title: 'Nitrofurantoin 100mg',
        price: '£15.00',
        image: '/images/products/nitro.webp',
        link: '/products/nitrofurantoin-100mg',
      },

      {
        id: 'norida-tablets',
        title: 'Noriday Tablets',
        price: '£20.00',
        image: '/images/products/noriday.webp',
        link: '/products/norida-tablets',
      },

      {
        id: 'nytol-25mg',
        title: 'Nytol 25mg',
        price: '£5.00',
        image: '/images/products/p_2.webp',
        link: '/products/nytol-25mg',
      },



      {
        id: 'nytol-50mg',
        title: 'Nytol 50mg',
        price: '£7.00',
        image: '/images/products/p_1.webp',
        link: '/products/nytol-50mg',
      },


      {
        id: 'nytol-liquid-300ml',
        title: 'Nytol Liquid 300ml',
        price: '£10.00',
        image: '/images/products/nytol.webp',
        link: '/products/nytol-liquid-300ml',
      },

      {
        id: 'omeprazole',
        title: 'Omeprazole',
        price: '£8.00',
        image: '/images/products/omepr.webp',
        link: '/products/omeprazole',
      },

      {
        id: 'period-delay-tablets',
        title: 'Period Delay Tablets',
        price: '£15.00',
        image: '/images/products/norethisterone.webp',
        link: '/products/period-delay-tablets',
      },




      {
        id: 'phenoxymethylpenicillin',
        title: 'Phenoxymethylpenicillin',
        price: '£15.00',
        image: '/images/products/phonos.webp',
        link: '/products/phenoxymethylpenicillin',
      },


      {
        id: 'priligy-30mg-3-tablets',
        title: 'Priligy 30mg (3 Tablets)',
        price: '£25.00',
        image: '/images/products/pri_3.webp',
        link: '/products/priligy-30mg-3-tablets',
      },

      {
        id: 'priligy-30mg-6-tablets',
        title: 'Priligy 30mg (6 Tablets)',
        price: '£48.00',
        image: '/images/products/pri_3.webp',
        link: '/products/priligy-30mg-6-tablets',
      },

      {
        id: 'priligy-60mg-3-tablets',
        title: 'Priligy 60mg (3 Tablets)',
        price: '£30.00',
        image: '/images/products/pri_2.webp',
        link: '/products/priligy-60mg-3-tablets',
      },

      {
        id: 'priligy-60mg-6-tablets',
        title: 'Priligy 60mg (6 Tablets)',
        price: '£52.00',
        image: '/images/products/pri_2.webp',
        link: '/products/priligy-60mg-6-tablets',
      },




      {
        id: 'promethazine-25mg',
        title: 'Promethazine 25mg',
        price: '£12.00',
        image: '/images/products/phernar.webp',
        link: '/products/promethazine-25mg',
      },

      {
        id: 'salamol-inhaler',
        title: 'Salamol Inhaler',
        price: '£12.00',
        image: '/images/products/salamol.webp',
        link: '/products/salamol-inhaler',
      },

      {
        id: 'sildenafil-50mg-pack-of-16',
        title: 'Sildenafil 50mg (Pack of 16)',
        price: '£50.00',
        image: '/images/products/slidenafil.webp',
        link: '/products/sildenafil-50mg-pack-of-16',
      },



      {
        id: 'sildenafil-50mg-pack-of-32',
        title: 'Sildenafil 50mg (Pack of 32)',
        price: '£80.00',
        image: '/images/products/slidenafil.webp',
        link: '/products/sildenafil-50mg-pack-of-32',
      },


      {
        id: 'sildenafil-50mg-pack-of-4',
        title: 'Sildenafil 50mg (Pack of 4)',
        price: '£15.00',
        image: '/images/products/slidenafil.webp',
        link: '/products/sildenafil-50mg-pack-of-4',
      },


      {
        id: 'sildenafil-50mg-pack-of-8',
        title: 'Sildenafil 50mg (Pack of 8)',
        price: '£27.50',
        image: '/images/products/slidenafil.webp',
        link: '/products/sildenafil-50mg-pack-of-8',
      },



      {
        id: 'starter-bundle',
        title: 'Starter Bundle',
        price: '£365.50',
        image: '/images/products/bundles.webp',
        link: '/products/starter-bundle',
      },


      
      {
        id: 'step-bundle',
        title: 'Step Bundle',
        price: '£436.00',
        image: '/images/products/bundles.webp',
        link: '/products/step-bundle',
      },


      {
        id: 'stud-100-delay-spray',
        title: 'Stud 100 Delay Spray',
        price: '£8.00',
        image: '/images/products/stud.webp',
        link: '/products/stud-100-delay-spray',
      },


      {
        id: 'sumatriptan-50mg',
        title: 'Sumatriptan 50mg',
        price: '£15.00',
        image: '/images/products/sumatriptan.webp',
        link: '/products/sumatriptan-50mg',
      },

      {
        id: 'sustain-bundle',
        title: 'Sustain Bundle',
        price: '£490.00',
        image: '/images/products/bundles.webp',
        link: '/products/sustain-bundle',
      },


      {
        id: 'tadalafil-10mg-pack-of-16',
        title: 'Tadalafil 10mg (Pack of 16)',
        price: '£30.00',
        image: '/images/products/taladafil.webp',
        link: '/products/tadalafil-10mg-pack-of-16',
      },

      {
        id: 'tadalafil-10mg-pack-of-32',
        title: 'Tadalafil 10mg (Pack of 32)',
        price: '£50.00',
        image: '/images/products/taladafil.webp',
        link: '/products/tadalafil-10mg-pack-of-32',
      },


      {
        id: 'tadalafil-10mg-pack-of-4',
        title: 'Tadalafil 10mg (Pack of 4)',
        price: '£9.00',
        image: '/images/products/taladafil.webp',
        link: '/products/tadalafil-10mg-pack-of-4',
      },


      {
        id: 'tadalafil-10mg-pack-of-8',
        title: 'Tadalafil 10mg (Pack of 8)',
        price: '£16.00',
        image: '/images/products/taladafil.webp',
        link: '/products/tadalafil-10mg-pack-of-8',
      },


      
      {
        id: 'wegovy-0.25mg',
        title: 'Wegovy 0.25mg',
        price: '£99.00',
        image: '/images/products/wegovy.webp',
        link: '/products/wegovy-0.25mg',
      },


      {
        id: 'wegovy-0.5mg',
        title: 'Wegovy 0.5mg',
        price: '£120.00',
        image: '/images/products/wegovy.webp',
        link: '/products/wegovy-0.5mg',
      },

      {
        id: 'wegovy-0.7mg',
        title: 'Wegovy 0.7mg',
        price: '£189.00',
        image: '/images/products/wegovy.webp',
        link: '/products/wegovy-1.7mg',
      },


      {
        id: 'wegovy-1mg',
        title: 'Wegovy 1mg',
        price: '£140.00',
        image: '/images/products/wegovy.webp',
        link: '/products/wegovy-1mg',
      },


      {
        id: 'wegovy-2.4mg',
        title: 'Wegovy 2.4mg',
        price: '£225.00',
        image: '/images/products/wegovy.webp',
        link: '/products/wegovy-2.4mg',
      },


  ];


  // const currentProduct = products.find(product => product.id === id) || products[0];


  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8  mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold text-teal-900 mb-12">Welcome to our Shop</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={product.link} key={product.id}>
            <div className="border border-gray-800 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow h-full">
              <div className="p-6 flex items-center justify-center h-52">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              
              {/* <div className="p-6 border-t border-gray-200"> */}
            
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {product.title}
                </h3>
                
                <p className="text-lg font-medium text-teal-900">
                  {product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsList;