"use client";

import { LineChart, Line,ResponsiveContainer } from 'recharts';

import React, { useState, useEffect ,FC } from 'react';
// import Link from 'next/link';
import { motion } from 'framer-motion';
import {ArrowRight,
  ArrowDownRight, Activity, CircleDollarSign, Cylinder, Boxes, ArrowUpRight ,Mail, Twitter, Github,
  Cpu, Database, Shield, Coins, Code, Network
} from 'lucide-react';

import FeaturedPosts from "@/components/FeaturedPosts";

// import { Canvas, useFrame } from '@react-three/fiber';
// import { AdaptiveDpr, AdaptiveEvents, PerspectiveCamera, Environment, Float } from '@react-three/drei';
// import { motion } from 'framer-motion';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';
// import { Mesh } from 'three';
import HeroSection from '@/components/HeroSection';


// function CryptoModel() {
//   const meshRef = useRef<Mesh>(null);

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.005;
//     }
//   });

//   return (
//     <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
//       <mesh ref={meshRef} scale={2} position={[0, 0, 0]}>
//         {/* Sphere placeholder */}
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial color="cyan" />
//       </mesh>
//     </Float>
//   );
// }


// const HeroSection = () => {
//   return (
//     <section className="relative h-screen w-full bg-[#0a0b1e] overflow-hidden">
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0b1e] pointer-events-none z-10" />
      
//       {/* 3D Canvas */}
//       <div className="absolute inset-0">
//         <Canvas>
//           <PerspectiveCamera makeDefault position={[0, 0, 10]} />
//           <Suspense fallback={null}>
//             <Environment preset="night" />
//             <CryptoModel />
//             <EffectComposer>
//               <Bloom
//                 intensity={1.5}
//                 luminanceThreshold={0.9}
//                 luminanceSmoothing={0.025}
//               />
//             </EffectComposer>
//           </Suspense>
//           <AdaptiveDpr pixelated />
//           <AdaptiveEvents />
//         </Canvas>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex items-center justify-center h-full container mx-auto px-4">
//         <div className="text-center max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
//               The Future of Web3
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Explore the decentralized universe of blockchain technology, NFTs, and DeFi innovations
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity">
//                 Start Exploring
//               </button>
//               <button className="px-8 py-3 rounded-xl border border-purple-500/20 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors">
//                 Learn More
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-full h-full">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full opacity-20"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 width: `${Math.random() * 10 + 5}px`,
//                 height: `${Math.random() * 10 + 5}px`,
//                 background: `radial-gradient(circle, rgba(147,51,234,1) 0%, rgba(79,70,229,1) 100%)`,
//                 animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



const categories = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Smart Contracts',
    count: 28,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'DeFi Protocols',
    count: 45,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Security',
    count: 32,
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: 'Tokenomics',
    count: 24,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Development',
    count: 56,
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Infrastructure',
    count: 38,
    color: 'from-purple-500 to-pink-500'
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-[#0a0b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
            Explore Topics
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Dive deep into specialized blockchain topics curated by industry experts
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-[#12133D] border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <div className={`w-full h-full bg-gradient-to-r ${category.color}`} />
                  </div>

                  <div className="relative p-6">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                      {category.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400">
                      {category.count} articles
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute bottom-6 right-6 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <div className={`text-white bg-gradient-to-r ${category.color} rounded-full p-2`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const generateMockData = () => ({
  daily: Array.from({ length: 24 }, (_, i) => ({
    time: i,
    value: Math.floor(Math.random() * 1000) + 500
  })),
  volume: Array.from({ length: 7 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    amount: Math.floor(Math.random() * 5000) + 2000
  }))
});

interface StatCardProps {
  title: string;
  value: string;
  change: string; 
  icon: FC<{ className?: string }>; 
  chartData: { value: number }[]; 
}

const StatCard: FC<StatCardProps>  = ({ title, value, change, icon: Icon, chartData }) => {
  const isPositive = parseFloat(change) > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#12133D] rounded-2xl p-6 border border-purple-500/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl ${isPositive ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
          <Icon className={`w-6 h-6 ${isPositive ? 'text-green-500' : 'text-red-500'}`} />
        </div>
      </div>

      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={isPositive ? '#22c55e' : '#ef4444'}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center mt-4">
        <span className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
          {change}
        </span>
        <span className="text-gray-400 ml-2">vs last 24h</span>
      </div>
    </motion.div>
  );
};

const TransactionStats = () => {
  const [data, setData] = useState(generateMockData());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateMockData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      title: 'Transaction Volume',
      value: '$12.8M',
      change: '+12.3%',
      icon: Activity,
      chartData: data.daily
    },
    {
      title: 'Total Value Locked',
      value: '$892.5M',
      change: '+8.1%',
      icon: CircleDollarSign,
      chartData: data.daily
    },
    {
      title: 'Active Smart Contracts',
      value: '15,234',
      change: '+5.7%',
      icon: Cylinder,
      chartData: data.daily
    },
    {
      title: 'Daily Blocks Created',
      value: '6,829',
      change: '-2.3%',
      icon: Boxes,
      chartData: data.daily
    }
  ];

  return (
    <section className="py-20 bg-[#0a0b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
            Network Statistics
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Real-time insights into blockchain network performance and activity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Volume Chart */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#12133D] rounded-2xl p-6 border border-purple-500/10"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Weekly Transaction Volume</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.volume}>
                <Bar dataKey="amount">
                  {data.volume.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={`url(#gradient-${index})`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};



const NewsletterCommunity = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const communities = [
    {
      name: 'Twitter',
      icon: Twitter,
      members: '125K+',
      color: 'bg-blue-500',
      link: '#'
    },
    // {
    //   name: 'Discord',
    //   icon: Discord,
    //   members: '85K+',
    //   color: 'bg-indigo-500',
    //   link: '#'
    // },
    {
      name: 'Github',
      icon: Github,
      members: '12K+',
      color: 'bg-gray-700',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-[#0a0b1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#12133D] rounded-2xl p-8 border border-purple-500/10"
          >
            <div className="max-w-md">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Blockchain Insights
              </h3>
              <p className="text-gray-400 mb-6">
                Get weekly updates on blockchain technology, market trends, and innovative solutions delivered to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0b1e] border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-2 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white hover:opacity-90 transition-opacity"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Community Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Join Our Community
            </h3>
            <div className="space-y-4">
              {communities.map((community) => (
                <a
                  key={community.name}
                  href={community.link}
                  className="group block"
                >
                  <div className="bg-[#12133D] rounded-2xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl ${community.color}`}>
                          <community.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            {community.name}
                          </h4>
                          <p className="text-gray-400">
                            {community.members} members
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



 

export default function Home() {
  return (
    <div>
      
      <HeroSection />
      {/* <HeroSection2 /> */}
      <Categories />
      {/* <FeaturedPosts /> */}
      <FeaturedPosts />
      <TransactionStats />
      <NewsletterCommunity />
      
      </div>

  );
}
