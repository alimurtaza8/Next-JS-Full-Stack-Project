import React from 'react';
import { Clock, Users, TrendingUp, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const SmartContractPostDetail = () => {
    const post = {
        // id: '3',
        title: 'Smart Contracts: The Backbone of Blockchain Innovation',
        excerpt: 'Exploring how smart contracts are transforming industries with automation and trustless execution.',
    
        category: 'Blockchain',
        readTime: '7 min read',
        engagement: '3.1k views',
        trending: 90,
        image: "/images/i-5.webp",
    
        content: `
          Smart contracts are one of the most groundbreaking innovations brought by blockchain technology. These self-executing contracts with terms directly written into code are transforming how agreements are created, validated, and executed.
    
          What Are Smart Contracts?
    
          A smart contract is a digital protocol that automatically enforces the terms of an agreement. Deployed on a blockchain, it ensures trustless execution by eliminating the need for intermediaries. Once predefined conditions are met, the smart contract triggers actions such as transferring funds or updating records.
    
          Key Features of Smart Contracts
    
          Smart contracts stand out due to their unique characteristics:
    
          - **Automation**: Processes execute automatically when conditions are fulfilled.
          - **Transparency**: The code is visible to all parties involved, ensuring trust.
          - **Immutability**: Once deployed, smart contracts cannot be altered, guaranteeing contract integrity.
          - **Cost Efficiency**: By removing intermediaries, smart contracts reduce operational costs.
    
          Use Cases Across Industries
    
          Smart contracts are revolutionizing various sectors:
    
          - **Finance**: Automating payments, loan agreements, and insurance claims.
          - **Supply Chain**: Tracking goods in real-time and ensuring authenticity.
          - **Healthcare**: Managing patient records and automating insurance payouts.
          - **Real Estate**: Streamlining property transactions and ownership transfers.
          - **Gaming**: Enabling provably fair gaming systems and NFT ownership.
    
          Challenges and Limitations
    
          Despite their potential, smart contracts face several challenges:
    
          - **Complexity**: Writing secure code requires expertise, and vulnerabilities can lead to significant losses.
          - **Scalability**: High transaction volumes on Layer 1 blockchains can result in delays and high fees.
          - **Legal Recognition**: Smart contracts exist in a gray area in many jurisdictions, raising questions about enforceability.
    
          Future Outlook
    
          The future of smart contracts is promising, with advancements in interoperability and Layer 2 solutions addressing current limitations. As regulatory frameworks evolve, smart contracts are expected to gain broader acceptance, unlocking new possibilities for automation and efficiency.
    
          Conclusion
    
          Smart contracts are more than just lines of code—they represent a shift towards a more automated, transparent, and decentralized future. By removing the need for intermediaries and ensuring trustless execution, they have become the backbone of blockchain innovation, driving adoption across industries and setting the stage for transformative change.
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

export default SmartContractPostDetail;