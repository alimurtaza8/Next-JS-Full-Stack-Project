import React from 'react';
import { Clock, Users, TrendingUp, ArrowLeft, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const LayerPostDetail = () => {
  const post = {
    // id: '1',
    title: 'Understanding Zero-Knowledge Proofs in Blockchain Privacy',
    excerpt: 'A deep dive into how ZK-proofs are revolutionizing privacy in blockchain transactions.',

    category: 'Layer',
    readTime: '8 min read',
    engagement: '2.5k views',
    trending: 95,
    image: "/images/i-3.webp",

    content: `
      Blockchain technology has revolutionized industries by enabling decentralized, secure, and transparent systems. However, as blockchain adoption grows, scalability challenges have become increasingly evident. Layer 2 solutions have emerged as a powerful approach to addressing these limitations, paving the way for mass adoption.

      Understanding Layer 2 Solutions

      Layer 2 solutions operate on top of the base blockchain (Layer 1) to enhance scalability and efficiency. Instead of processing all transactions directly on the main chain, Layer 2 solutions handle most computations off-chain while periodically anchoring results back to the main blockchain. This approach reduces the load on Layer 1, improving transaction speed and reducing fees.

      Key Types of Layer 2 Solutions

      Layer 2 encompasses a variety of approaches, each tailored to address specific blockchain scalability needs:

      - **State Channels**: State channels allow users to conduct multiple off-chain transactions while only finalizing the net result on-chain. This method is ideal for use cases like micropayments and gaming.
      - **Plasma**: Plasma chains are smaller blockchains linked to the main chain, enabling high-speed processing of transactions. They leverage fraud proofs to ensure security.
      - **Rollups**: Rollups bundle multiple transactions into a single proof submitted to the main chain. These include:
          - **Optimistic Rollups**: Assume transactions are valid and resolve disputes using fraud proofs.
          - **ZK-Rollups**: Use zero-knowledge proofs to verify transaction validity without revealing details.
      - **Sidechains**: Independent blockchains with their own consensus mechanisms, connected to the main chain via a bridge.

      Benefits of Layer 2 Solutions

      Layer 2 solutions bring several advantages to the blockchain ecosystem:

      - **Scalability**: By offloading the transaction load, Layer 2 significantly increases the network's capacity.
      - **Reduced Transaction Fees**: Off-chain processing decreases congestion, resulting in lower transaction costs.
      - **Enhanced User Experience**: Faster transaction confirmation times make blockchain applications more accessible to users.
      - **Interoperability**: Many Layer 2 solutions enable cross-chain communication, broadening the potential for ecosystem collaboration.

      Challenges and Considerations

      While Layer 2 solutions offer numerous benefits, they are not without challenges:

      - **Security**: Ensuring robust security in off-chain operations remains a top priority.
      - **Complexity**: The implementation and integration of Layer 2 solutions can be complex for developers.
      - **Adoption**: Educating users and developers about Layer 2 benefits and usability is essential for widespread adoption.

      The Future of Layer 2 Solutions

      As blockchain technology continues to evolve, Layer 2 solutions are expected to play a critical role in driving mass adoption. Emerging innovations, such as hybrid Layer 2 systems and enhanced interoperability protocols, will further improve scalability and user experience. By addressing the limitations of Layer 1 blockchains, Layer 2 solutions are enabling blockchain technology to reach its full potential.

      Conclusion

      The rise of Layer 2 solutions marks a pivotal moment in the journey toward blockchain scalability and mass adoption. By alleviating congestion, reducing fees, and enhancing user experiences, these solutions are empowering decentralized systems to scale effectively. As the ecosystem matures, Layer 2 solutions will be instrumental in transforming blockchain into a technology that can support global-scale applications and widespread usage.
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

export default LayerPostDetail;