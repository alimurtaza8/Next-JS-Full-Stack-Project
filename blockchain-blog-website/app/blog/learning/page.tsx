import React from 'react';
import { Clock, Users, TrendingUp, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const LearningPostDetail = () => {
    const post = {
        // id: '5',
        title: 'Mastering Blockchain: A Comprehensive Learning Process for Beginners',
        excerpt: 'A step-by-step guide to learning blockchain technology, from basics to advanced concepts.',
    
        category: 'Education',
        readTime: '7 min read',
        engagement: '3.8k views',
        trending: 90,
        image: "/images/i-6.webp",
    
        content: `
          Blockchain technology is transforming industries worldwide, making it an essential skill for tech enthusiasts and professionals. However, diving into blockchain can be overwhelming. This guide outlines a structured approach to mastering blockchain, starting from the basics and progressing to advanced topics.
    
          Understanding Blockchain Basics
    
          The first step in learning blockchain is grasping its core concepts:
    
          - **What is Blockchain?**: Understand the structure of a blockchain, including blocks, chains, and distributed ledgers.
          - **Cryptography Basics**: Learn how cryptographic techniques like hashing and digital signatures ensure data security.
          - **Consensus Mechanisms**: Explore how networks agree on transaction validity, including Proof of Work (PoW) and Proof of Stake (PoS).
    
          Tools and Resources for Beginners
    
          Utilize the following resources to build a solid foundation:
    
          - **Online Courses**: Platforms like Coursera, Udemy, and edX offer beginner-friendly blockchain courses.
          - **Books**: Read foundational books such as "Mastering Bitcoin" by Andreas Antonopoulos or "Blockchain Basics" by Daniel Drescher.
          - **Communities**: Join blockchain forums, Reddit communities, or Discord groups to engage with experts and peers.
    
          Hands-On Learning: Coding and Development
    
          Once you understand the basics, move on to practical learning:
    
          - **Blockchain Programming Languages**: Learn languages like Solidity for Ethereum smart contracts and Rust for Solana development.
          - **Create a Wallet**: Set up and manage your own cryptocurrency wallet to familiarize yourself with blockchain interfaces.
          - **Deploy Smart Contracts**: Write and deploy simple smart contracts on testnets like Ethereum's Goerli or Binance Smart Chain.
    
          Exploring Advanced Blockchain Topics
    
          After mastering the fundamentals, delve into advanced topics:
    
          - **Decentralized Finance (DeFi)**: Learn how DeFi platforms like Uniswap and Aave operate.
          - **Layer 2 Solutions**: Understand scaling technologies like rollups and state channels.
          - **Interoperability**: Study how different blockchains communicate through protocols like Polkadot and Cosmos.
    
          Real-World Applications and Career Opportunities
    
          Blockchain knowledge opens up numerous career paths:
    
          - **Blockchain Developer**: Build decentralized applications (dApps) and smart contracts.
          - **Blockchain Analyst**: Assess the performance and potential of blockchain projects.
          - **Blockchain Architect**: Design blockchain networks and infrastructure.
    
          Overcoming Challenges in Learning Blockchain
    
          - **Steep Learning Curve**: Be patient and consistent; blockchain involves mastering multiple disciplines.
          - **Keeping Up with Innovations**: Stay updated with the latest developments through blogs, podcasts, and webinars.
    
          Conclusion
    
          Learning blockchain is a journey that requires dedication and curiosity. By following a structured process, leveraging resources, and practicing hands-on development, anyone can master blockchain technology. Whether you're aspiring to be a developer, entrepreneur, or researcher, the blockchain learning process is your gateway to the future of technology.
        `
    };
    
   


  return (
    <div className="min-h-screen bg-[#0a0b1e]">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0b1e]" />
        </div>
        
        {/* Back Button */}
        <div className="relative z-10 pt-32 px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-white hover:text-purple-400 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Articles</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-[#12133D] rounded-2xl p-8 border border-purple-500/10">
          {/* Category */}
          <div className="mb-6">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Author & Meta Info */}
          {/* <div className="flex items-center justify-between py-6 border-y border-purple-500/10">
            <div className="flex items-center space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-white font-medium">{post.author.name}</h3>
                <p className="text-gray-400 text-sm">{post.author.role}</p>
              </div>
            </div> */}
            
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>{post.engagement}</span>
              </div>
              <div className="flex items-center text-green-500">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span>{post.trending}%</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 prose prose-invert prose-purple max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/##\s(.*)/g, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>').replace(/-\s(.*)/g, '<li class="ml-4">$1</li>') }} />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-purple-500/10">
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-purple-500/10 text-purple-400 transition-colors">
                <ThumbsUp className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full hover:bg-purple-500/10 text-purple-400 transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full hover:bg-purple-500/10 text-purple-400 transition-colors">
                <Bookmark className="w-6 h-6" />
              </button>
            </div>
            <span className="text-gray-400 text-sm">
              {/* Published on {post.publishDate} */}
            </span>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default LearningPostDetail;