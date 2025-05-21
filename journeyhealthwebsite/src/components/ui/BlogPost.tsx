

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';

// Types for our components
interface RelatedArticle {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

interface BlogPostProps {
  title: string;
  featuredImage: string;
  content: React.ReactNode;
  relatedArticles: RelatedArticle[];
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  featuredImage,
  content,
  relatedArticles
}) => {
  return (
    <div className="bg-white pt-16"> {/* Add top padding to create space from header */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - takes up 2/3 of the grid on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Article title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            
            {/* Featured image */}
            <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden">
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Social share buttons */}
            <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Share:</span>
              <button className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={20} />
              </button>
              <button className="text-sky-500 hover:text-sky-700">
                <FaTwitter size={20} />
              </button>
              <button className="text-blue-800 hover:text-blue-900">
                <FaLinkedin size={20} />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <FaPinterest size={20} />
              </button>
            </div>
            
            {/* Blog content */}
            <div className="prose max-w-none">
              {content}
            </div>
          </div>
          
          {/* Sidebar with related articles - takes up 1/3 of the grid on large screens */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recent Articles
              </h2>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <RelatedArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Related Article Card Component
const RelatedArticleCard: React.FC<{ article: RelatedArticle }> = ({ article }) => {
  return (
    <Link href={article.link} className="block group">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-start space-y-2 flex-col mb-2">
          <div className="mb-1">
            <span className="inline-block px-3 py-1 border border-gray-300 text-gray-700 text-sm font-medium rounded-full">
              {article.category}
            </span>
          </div>
          <h4 className="text-gray-800 font-medium text-base">
            {article.title}
          </h4>
        </div>
        <div className="relative w-full h-36 rounded-lg overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;