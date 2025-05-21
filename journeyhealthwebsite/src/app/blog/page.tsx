import React from 'react';
import Link from 'next/link';

// Blog article interface
interface BlogArticle {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

// Define blog articles
const blogArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'Eczema Triggers and How to Avoid Them',
    category: 'Skin',
    imageUrl: '/images/blog/blog_page_2.webp',
    link: '/blog/eczema-triggers-and-how-to-avoid-them'
  },
  {
    id: '2',
    title: 'All About Hayfever and How to Alleviate Symptoms',
    category: 'Hayfever',
    imageUrl: '/images/blog/blog_2.webp',
    link: '/blog/all-about-hayfever-and-how-to-alleviate-symptoms'
  },
  {
    id: '3',
    title: 'An Introduction to Weight Loss Injections for Effective Results',
    category: 'Weight Loss',
    imageUrl: '/images/blog/blog_page_1.webp',
    link: '/blog/weight-loss-injections'
  },
  {
    id: '4',
    title: 'Jet Lag Remedies for Frequent UK Travellers',
    category: 'Sleep Aid',
    imageUrl: '/images/blog/blog_page_3.webp',
    link: '/blog/jet-lag-remedies-for-frequent-uk-travellers'
  },
  {
    id: '5',
    title: 'Essential Guide to Premature Ejaculation Treatments in the UK',
    category: 'Sexual Health',
    imageUrl: '/images/blog/blog_page_4.webp',
    link: '/blog/essential-guide-to-premature-ejaculation-treatments-in-the-uk'
  },
  {
    id: '6',
    title: 'Complete Guide to Using Mounjaro for Weight Management',
    category: 'Weight Loss',
    imageUrl: '/images/blog/blog_page_5.webp',
    link: '/blog/complete-guide-to-using-mounjaro-for-weight-management'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Main container */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Journey Health Blog
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Our online pharmacy at Journey Health
            covers everything from sexual health, mens and womens health to pain relief, sleep, hair loss, hay fever and eczema.
          </p>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Blog Card Component
const BlogCard: React.FC<{ article: BlogArticle }> = ({ article }) => {
  return (
    <Link href={article.link} className="block group border-gray-600">
      <div className="bg-white  rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Category Tag */}
        <div className="p-4 pb-2">
          <span className="inline-block px-3 py-1 border border-gray-600 text-gray-700 text-sm font-medium rounded-full">
            {article.category}
          </span>
        </div>
        
        {/* Article Title */}
        <div className="px-4 pb-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
        </div>
        
        {/* Article Image */}
        <div className="relative w-full h-48">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
};