
"use client";



import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Users, TrendingUp
} from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    engagement: string;
    trending: number;
    image: string;
    slug: string;
  }
  
  const featuredPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Smart Contracts: The Backbone of Blockchain Innovation',
      excerpt: 'Exploring how smart contracts are transforming industries with automation and trustless execution',
      category: 'Smart Contract',
      readTime: '8 min read',
      engagement: '20.5k views',
      trending: 95,
      // image: 'https://via.placeholder.com/800x400?text=DeFi+Strategies',
      image: "/images/i-4.jpg",
      slug: "smart",
    },
    {
      id: '2',
      title: 'The Evolution of DeFi: From Simple Swaps to Complex Yield Strategies',
      excerpt: 'Explore how DeFi has transformed from basic token exchanges to sophisticated financial instruments.',
      category: 'DeFi',
      readTime: '8 min read',
      engagement: '2.5k views',
      trending: 95,
      // image: 'https://via.placeholder.com/800x400?text=DeFi+Strategies',
      image: "/images/i-1.jpg",
      slug: "defi",
    },
    {
      id: '3',
      title: 'Understanding Zero-Knowledge Proofs in Blockchain Privacy',
      excerpt: 'A deep dive into how ZK-proofs are revolutionizing privacy in blockchain transactions.',
      category: 'Technology',
      readTime: '10 min read',
      engagement: '3.2k views',
      trending: 88,
      image: '/images/i-2.webp',
      slug: "zk",
    },
    {
      id: '4',
      title: 'The Rise of Layer 2 Solutions: Scaling Blockchain for Mass Adoption',
      excerpt: 'Analyzing the impact of Layer 2 solutions on blockchain scalability and adoption.',
      category: 'Scaling',
      readTime: '6 min read',
      engagement: '1.8k views',
      trending: 92,
      image: '/images/i-3.webp',
      slug: "layer",
    },
    {
      id: '5',
      title: 'Blockchain Development in Finance: Smart Contracts Revolutionizing Transactions',
      excerpt: 'How smart contracts are redefining financial systems through automation, security, and transparency.',
      category: 'Finance Smart Contract',
      readTime: '12 min read',
      engagement: '11.5k views',
      trending: 98,
      // image: 'https://via.placeholder.com/800x400?text=DeFi+Strategies',
      image: "/images/i-5.jpg",
      slug: "finance",
    },
    {
      id: '6',
      title: 'Mastering Blockchain: A Comprehensive Learning Process for Beginners',
      excerpt: 'A step-by-step guide to learning blockchain technology, from basics to advanced concepts.',
      category: 'Blockchain learning Smart Contract',
      readTime: '7 min read',
      engagement: '3.5k views',
      trending: 98,
      // image: 'https://via.placeholder.com/800x400?text=DeFi+Strategies',
      image: "/images/i-6.webp",
      slug: "learning",
    },
  ];
  
  const FeaturedPosts = () => {
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
              Featured Insights
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Stay ahead with our curated collection of breakthrough blockchain developments and insights
            </p>
          </motion.div>
  
          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-[#12133D] rounded-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#12133D]/80" />
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300">
                          {post.category}
                        </span>
                      </div>
                    </div>
  
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {post.excerpt}
                      </p>
  
                      {/* Metrics */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {post.engagement}
                          </span>
                        </div>
                        <span className="flex items-center text-green-500">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {post.trending}%
                        </span>
                      </div>
  
                      {/* Read More */}
                      <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
  
          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/blog" className="inline-flex items-center">
              <button className="px-8 py-3 rounded-xl border border-purple-500/20 text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors">
                <span className="flex items-center space-x-2">
                  <span>View All Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  };
  

export default FeaturedPosts;