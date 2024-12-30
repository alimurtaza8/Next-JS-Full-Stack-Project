import React from 'react';
import { Clock, Users, TrendingUp, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const FinancePostDetail = () => {
    const post = {
        // id: '4',
        title: 'Blockchain Development in Finance: Smart Contracts Revolutionizing Transactions',
        excerpt: 'How smart contracts are redefining financial systems through automation, security, and transparency.',
    
        category: 'Finance',
        readTime: '9 min read',
        engagement: '4.2k views',
        trending: 88,
        image: "/images/i-5.jpg",
    
        content: `
          The financial sector is undergoing a profound transformation driven by blockchain technology and smart contracts. By enabling automated, trustless, and transparent transactions, smart contracts are reshaping how financial systems operate.
    
          The Role of Blockchain in Finance
    
          Blockchain serves as the foundation for a decentralized financial ecosystem. By providing an immutable ledger, it eliminates intermediaries, reduces costs, and increases transaction speed. Smart contracts amplify these benefits by automating processes that traditionally required manual intervention.
    
          How Smart Contracts Work in Finance
    
          Smart contracts are self-executing programs deployed on a blockchain. They automatically enforce agreements when predefined conditions are met. In finance, this functionality has unlocked a wide array of applications:
    
          - **Payments**: Automating cross-border payments, reducing delays and fees.
          - **Lending and Borrowing**: Facilitating peer-to-peer lending without intermediaries.
          - **Insurance**: Streamlining claims processing by verifying conditions on-chain.
          - **Trading and Settlement**: Enabling instant, trustless settlement of trades.
          - **Tokenization**: Representing assets like stocks, bonds, and real estate as digital tokens.
    
          Benefits of Smart Contracts in Finance
    
          Smart contracts bring multiple advantages to the financial industry:
    
          - **Efficiency**: Processes that once took days are now completed in seconds.
          - **Transparency**: Transactions are recorded on a public ledger, ensuring accountability.
          - **Security**: Immutable code reduces the risk of fraud and manipulation.
          - **Cost Reduction**: Eliminating intermediaries lowers operational costs.
    
          Challenges to Adoption
    
          Despite their potential, smart contracts in finance face several hurdles:
    
          - **Regulatory Uncertainty**: Many jurisdictions have yet to establish clear guidelines for blockchain and smart contract use in finance.
          - **Scalability**: High transaction volumes can strain blockchain networks, leading to delays.
          - **Code Vulnerabilities**: Poorly written smart contracts can result in financial losses.
    
          The Future of Finance with Smart Contracts
    
          As blockchain technology matures, we can expect greater adoption of smart contracts in finance. Innovations such as Layer 2 scaling solutions and interoperability protocols will address current limitations. Regulatory advancements will also provide clarity, fostering trust and encouraging widespread use.
    
          Conclusion
    
          Blockchain development in finance, powered by smart contracts, is revolutionizing how we interact with money. By automating complex processes, enhancing transparency, and reducing costs, smart contracts are paving the way for a decentralized financial future. As the ecosystem evolves, we stand on the brink of a new era in financial innovation.
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

export default FinancePostDetail;