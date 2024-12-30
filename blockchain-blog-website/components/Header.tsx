"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wallet2, Menu, X, Blocks, ChevronDown
} from 'lucide-react';



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0b1e]/95 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Blocks className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              MetaChain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white">
                <span>Explore</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full -left-4 hidden group-hover:block">
                <div className="bg-[#0a0b1e]/95 backdrop-blur-lg mt-2 py-2 w-48 rounded-xl border border-purple-500/20">
                  <Link href="/#" className="block px-4 py-2 text-gray-300 hover:bg-purple-500/10 hover:text-white">
                    NFT Gallery
                  </Link>
                  <Link href="/#" className="block px-4 py-2 text-gray-300 hover:bg-purple-500/10 hover:text-white">
                    Token Explorer
                  </Link>
                  <Link href="/#" className="block px-4 py-2 text-gray-300 hover:bg-purple-500/10 hover:text-white">
                    DeFi Dashboard
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-gray-300 hover:text-white">
              Blog
            </Link>
            <Link href="/#" className="text-gray-300 hover:text-white">
              Marketplace
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2 rounded-xl text-gray-300 hover:text-white border border-purple-500/20 hover:bg-purple-500/10">
              <span className="flex items-center space-x-2">
                <Wallet2 className="w-4 h-4" />
                <span>Connect Wallet</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#0a0b1e]/95 backdrop-blur-lg"
          >
            <nav className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="/explore"
                className="block px-4 py-2 text-gray-300 hover:bg-purple-500/10 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 text-gray-300 hover:bg-purple-500/10 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/marketplace"
                className="block px-4 py-2 text-gray-300 hover:bg-purple-500/10 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <button className="w-full mt-4 px-6 py-2 rounded-xl text-gray-300 hover:text-white border border-purple-500/20 hover:bg-purple-500/10">
                <span className="flex items-center justify-center space-x-2">
                  <Wallet2 className="w-4 h-4" />
                  <span>Connect Wallet</span>
                </span>
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;