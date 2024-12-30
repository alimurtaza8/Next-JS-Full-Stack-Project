"use client";


import React from 'react';
import Link from 'next/link';

import { Blocks,Mail, Twitter, Github,Shield
} from 'lucide-react';


const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    const footerSections = {
      platform: [
        { label: 'About Us', href: '/#' },
        { label: 'Our Vision', href: '/#' },
        { label: 'Technology', href: '/#' },
        { label: 'Partners', href: '/#' },
        { label: 'Roadmap', href: '/#' }
      ],
      resources: [
        { label: 'Documentation', href: '/#' },
        { label: 'API Reference', href: '/#' },
        { label: 'Tutorials', href: '/#' },
        { label: 'Blog', href: '/blog' },
        { label: 'Community Forum', href: '/#' }
      ],
      developers: [
        { label: 'Get Started', href: '/#' },
        { label: 'SDK', href: '/dev/sdk' },
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'Technical Docs', href: '/dev/docs' },
        { label: 'Status', href: '/status' }
      ],
      legal: [
        { label: 'Privacy Policy', href: '/#' },
        { label: 'Terms of Service', href: '/#' },
        { label: 'Security', href: '/#' },
        { label: 'Compliance', href: '/#' },
        { label: 'Disclaimers', href: '/#' }
      ]
    };
  
    return (
      <footer className="bg-[#0a0b1e] border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <Blocks className="w-8 h-8 text-purple-500" />
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                    MetaChain
                  </span>
                </Link>
                <p className="text-gray-400 mb-6 max-w-md">
                  Building the future of decentralized technology. Join us in creating a more transparent and accessible blockchain ecosystem.
                </p>
                <div className="flex space-x-4">
                  {[Twitter, Github, Mail].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="p-2 rounded-lg bg-[#12133D] hover:bg-purple-500/10 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                    </a>
                  ))}
                </div>
              </div>
  
              {/* Navigation Columns */}
              {Object.entries(footerSections).map(([key, items]) => (
                <div key={key}>
                  <h3 className="text-white font-semibold mb-4 capitalize">
                    {key}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          {/* Newsletter Bar */}
          <div className="py-8 border-t border-purple-500/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-white font-semibold mb-2">
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-gray-400">
                  Get the latest updates on blockchain technology
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 rounded-l-lg bg-[#12133D] border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                />
                <button className="px-6 py-2 rounded-r-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="py-6 border-t border-purple-500/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} MetaChain. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <button className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Shield className="w-5 h-5" />
                </button>
                <div className="h-4 w-px bg-purple-500/20" />
                <select className="bg-transparent text-gray-400 text-sm focus:outline-none">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };


export default Footer;