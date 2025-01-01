import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">SmartNext</h3>
            <p className="text-sm leading-relaxed">
              Your premier destination for quality products and exceptional shopping experiences. 
              Discover the latest trends and timeless classics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="hover:text-white transition-colors">All Products</a>
              </li>
              <li>
                <a href="/#" className="hover:text-white transition-colors">Featured Items</a>
              </li>
              <li>
                <a href="/3" className="hover:text-white transition-colors">New Arrivals</a>
              </li>
              <li>
                <a href="/#" className="hover:text-white transition-colors">Special Offers</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="/#" className="hover:text-white transition-colors">Shipping Information</a>
              </li>
              <li>
                <a href="/#" className="hover:text-white transition-colors">Returns & Exchanges</a>
              </li>
              <li>
                <a href="/#" className="hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-1" />
              <p>123 Shopping Street, Commerce City, ST 12345</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5" />
              <p>support@shopnext.com</p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-4">Stay updated with our latest products and special offers.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 SmartNext. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;