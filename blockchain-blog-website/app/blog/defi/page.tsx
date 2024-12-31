import React from 'react';
import { Clock, Users, TrendingUp, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const BlogPostDetail = () => {
  const post = {
    // id: '1',
    title: 'The Evolution of DeFi: From Simple Swaps to Complex Yield Strategies',
    excerpt: 'Explore how DeFi has transformed from basic token exchanges to sophisticated financial instruments.',
    category: 'DeFi',
    readTime: '8 min read',
    engagement: '2.5k views',
    trending: 95,
    image: "/images/i-1.jpg",
 
    content: `
      The decentralized finance (DeFi) landscape has undergone a remarkable transformation since its inception. What began as simple token swap mechanisms has evolved into a sophisticated ecosystem of financial instruments and yield-generating strategies.

      The Early Days of DeFi

      In the beginning, DeFi primarily consisted of basic token exchanges and lending platforms. Users could swap one token for another or deposit their assets to earn simple interest. These fundamental building blocks laid the groundwork for what would become a revolutionary financial system.

      The Rise of Yield Farming

      As the DeFi ecosystem matured, we witnessed the emergence of yield farming - a strategy where users could provide liquidity to various protocols in exchange for rewards. This marked a significant shift in how users could interact with their digital assets, enabling them to earn multiple forms of yield simultaneously.

      Advanced Yield Strategies

      Today's DeFi landscape features complex yield strategies that leverage multiple protocols and mechanisms:

      - Protocol-owned liquidity
      - Delta-neutral positions
      - Cross-chain yield opportunities
      - Automated yield optimizers
      - Risk-tranched yield products

      The Future of DeFi

      Looking ahead, we can expect even more sophisticated financial instruments to emerge. The integration of real-world assets, improved risk management systems, and enhanced user interfaces will likely drive the next wave of DeFi innovation.

      Impact on Traditional Finance

      The evolution of DeFi has not gone unnoticed by traditional financial institutions. Many are now exploring ways to integrate DeFi principles into their existing systems, recognizing the potential for improved efficiency and accessibility.
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

export default BlogPostDetail;