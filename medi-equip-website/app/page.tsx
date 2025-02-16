
"use client";

import { ChevronRight } from 'lucide-react';

import React, { useState, useEffect } from 'react';
import { Menu, Phone, Globe, Search, X ,Shield, 
  Clock, 
  Award, 
  Users, 
  Stethoscope,Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  CheckCircle,
  HeartPulse } from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top Bar with Contact Info */}
      <div className="hidden lg:flex justify-end items-center bg-gray-50 px-6 py-2 space-x-6">
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-teal-600" />
          <a href="tel:+49021138838868" className="text-sm text-gray-600 hover:text-teal-600">
            +49 (0) 211-3883-8868
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-teal-600" />
          <a href="tel:+49021117936440" className="text-sm text-gray-600 hover:text-teal-600">
            +49 (0) 211-1793-640
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setSelectedLang(selectedLang === 'EN' ? 'DE' : 'EN')}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-teal-600"
          >
            <Globe className="w-4 h-4" />
            <span>{selectedLang}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-teal-600">MediEquip</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/#" className="text-gray-700 hover:text-teal-600">
              About Us
            </Link>
            <Link href="/#" className="text-gray-700 hover:text-teal-600">
              Product Portfolio
            </Link>
            <Link href="/#" className="text-gray-700 hover:text-teal-600">
              Service & Support
            </Link>
            <Link href="/#" className="text-gray-700 hover:text-teal-600">
              News
            </Link>
            <Link href="/#" className="text-gray-700 hover:text-teal-600">
              Career
            </Link>
            <Link href="/#" className="text-gray-700 hover:text-teal-600">
              Contacts
            </Link>
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 border border-gray-200 rounded-l focus:outline-none focus:border-teal-600"
              />
              <button className="px-4 py-2 bg-teal-600 text-white rounded-r hover:bg-teal-700">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 hover:text-teal-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2">
              <Link
                href="/#"
                className="block px-3 py-2 rounded text-gray-700 hover:bg-teal-600 hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/#"
                className="block px-3 py-2 rounded text-gray-700 hover:bg-teal-600 hover:text-white"
              >
                Product Portfolio
              </Link>
              <Link
                href="/#"
                className="block px-3 py-2 rounded text-gray-700 hover:bg-teal-600 hover:text-white"
              >
                Service & Support
              </Link>
              <Link
                href="/#"
                className="block px-3 py-2 rounded text-gray-700 hover:bg-teal-600 hover:text-white"
              >
                News
              </Link>
              <Link
                href="/#"
                className="block px-3 py-2 rounded text-gray-700 hover:bg-teal-600 hover:text-white"
              >
                Career
              </Link>
              <Link
                href="/#"
                className="block px-3 py-2 rounded text-gray-700 hover:bg-teal-600 hover:text-white"
              >
                Contacts
              </Link>
              <div className="pt-4">
                <div className="flex items-center px-3">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-2 border border-gray-200 rounded-l focus:outline-none focus:border-teal-600"
                  />
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-r hover:bg-teal-700">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <a href="tel:+49021138838868" className="block px-3 py-2 text-gray-600">
                  +49 (0) 211-3883-8868
                </a>
                <a href="tel:+49021117936440" className="block px-3 py-2 text-gray-600">
                  +49 (0) 211-1793-640
                </a>
                <button 
                  onClick={() => setSelectedLang(selectedLang === 'EN' ? 'DE' : 'EN')}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600"
                >
                  <Globe className="w-4 h-4" />
                  <span>{selectedLang}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


interface SlideContent {
  title: string;
  description: string;
  imageUrl: string;
  badge?: {
    imageUrl: string;
    text: string;
  };
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideContent[] = [
    {
      title: "Dixion is an partner Medecins Sans Frontieres Ärzte Ohne Grenzen e.V.",
      description: "As a Partner-Company 2024, we support the work of DOCTORS WITHOUT BORDERS / MEDECINS SANS FRONTIERES (MSF). DOCTORS WITHOUT BORDERS provides emergency medical relief in areas fraught by crisis, war, or natural catastrophes.",
      imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      // badge: {
      //   imageUrl: "/api/placeholder/150/200",
      //   text: "PARTNER COMPANY 2024"
      // }
    },
    {
      title: "Advanced Medical Solutions for Global Healthcare",
      description: "Providing cutting-edge medical equipment and solutions to healthcare facilities worldwide, ensuring better patient care and improved medical outcomes.",
      imageUrl: "/images/operating-room_2-min.jpg",
    },
    {
      title: "Supporting Healthcare Heroes Worldwide",
      description: "Our commitment to healthcare excellence extends across borders, providing essential medical equipment to professionals who save lives every day.",
      imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src={slides[currentSlide].imageUrl}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-teal-900/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center h-full max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500 ease-in-out">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 transition-all duration-500 ease-in-out">
            {slides[currentSlide].description}
          </p>

          {/* Badge (if available) */}
          {slides[currentSlide].badge && (
            <div className="absolute top-8 right-8 bg-red-600 text-white p-4 rounded shadow-lg transform -rotate-12">
              <div className="text-center">
                <p className="font-bold text-sm mb-2">PARTNER</p>
                <p className="font-bold text-lg">COMPANY</p>
                <p className="font-bold text-2xl">2024</p>
              </div>
            </div>
          )}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};




// Define the type for equipment category
interface EquipmentCategory {
  id: string;
  title: string;
  count: number;
  imageUrl: string;
}

const categories: EquipmentCategory[] = [
  {
    id: '1',
    title: 'Anesthesia Workstations',
    count: 4,
    imageUrl: '/images/anesthesia-machines.png'  // Replace with actual image URL
  },
  {
    id: '2',
    title: 'Electrocoagulators',
    count: 4,
    imageUrl: '/images/electrocoagulators.png'
  },
  {
    id: '3',
    title: 'Operating Tables',
    count: 10,
    imageUrl: '/images/operating-tables.png'
  },
  {
    id: '4',
    title: 'Suction Pumps',
    count: 8,
    imageUrl: '/images/suction-units-2.png'
  },
  {
    id: '5',
    title: 'Surgical Lights',
    count: 4,
    imageUrl: '/images/electrocoagulators.png'
  },
  {
    id: '6',
    title: 'Stretcher',
    count: 1,
    imageUrl: '/images/anesthesia-machines.png' 
  },
  {
    id: '7',
    title: 'Intensive Care Beds',
    count: 1,
    imageUrl: '/images/electrocoagulators.png'
  },
  {
    id: '8',
    title: 'Classic Beds',
    count: 3,
    imageUrl: '/images/operating-tables.png'
  },
  {
    id: '9',
    title: 'Infant Beds',
    count: 2,
    imageUrl: '/images/suction-units-2.png'
  },
  {
    id: '10',
    title: 'Pediatric Beds',
    count: 2,
    imageUrl: '/images/anesthesia-machines.png' 
  },
  {
    id: '11',
    title: 'Incubators',
    count: 6,
    imageUrl: '/images/suction-units-2.png'
  },
  {
    id: '12',
    title: 'Phototherapy',
    count: 2,
    imageUrl: '/images/anesthesia-machines.png' 
  }
];

const MedicalEquipmentGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Over <span className="text-teal-600">40 groups</span> of{" "}
          <span className="text-teal-600">medical equipment</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <div className="p-4">
              {/* Category Image */}
              <div className="relative mb-4 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Category Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500">({category.count})</p>
                </div>
                <ChevronRight className="w-5 h-5 text-teal-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Button */}
      <div className="mt-12 text-center">
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 uppercase tracking-wider text-sm">
          Product Portfolio
        </button>
      </div>
    </div>
  );
};


const stats = [
  {
    id: 1,
    value: '25+',
    label: 'Years Experience',
    icon: Clock
  },
  {
    id: 2,
    value: '1000+',
    label: 'Hospitals Served',
    icon: Stethoscope
  },
  {
    id: 3,
    value: '50+',
    label: 'Countries',
    icon: Globe
  },
  {
    id: 4,
    value: '24/7',
    label: 'Technical Support',
    icon: HeartPulse
  }
];

const features = [
  {
    id: 1,
    title: 'ISO Certified Equipment',
    description: 'All our medical equipment meets international quality standards and certifications.',
    icon: Users,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 2,
    title: 'Expert Consultation',
    description: 'Our team of medical equipment specialists provides personalized consultation for your needs.',
    icon: Users,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 3,
    title: 'Warranty Protection',
    description: 'Comprehensive warranty coverage with extended protection plans available.',
    icon: Shield,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 4,
    title: 'Industry Recognition',
    description: 'Multiple awards for excellence in medical equipment distribution and service.',
    icon: Award,
    color: 'bg-orange-100 text-orange-600'
  }
];

const WhyChooseUs = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why Choose Our Medical Equipment?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence in medical equipment with unmatched quality, service, and support for healthcare professionals worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="relative bg-white rounded-xl shadow-sm p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`
                  inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full 
                  ${hoveredStat === stat.id ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'}
                  transition-colors duration-300
                `}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative">
      {/* <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: '/images/modern-world-map.png',  // Replace with actual world map image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      /> */}

       {/* World Map Background */}
       {/* <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:  `url('/images/operating-room_2-min.jpg')`,  // Ensure the path is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      /> */}

      {/* <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="/images/operating-room_2-min.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div> */}

      <div className="absolute inset-0 opacity-5 z-0"
      
        style={{
          backgroundImage: `url('/public/images/modern-world-map.jpg') !important`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-gray-900/95 to-gray-900/95 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Top Section with Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">MediEquip</h3>
              <p className="text-gray-400 mb-6">
                Leading provider of premium medical equipment with a commitment to excellence in healthcare technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Products', 'Services', 'Support', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">
                    123 Medical Center Drive,<br />
                    Healthcare District,<br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-teal-500" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-teal-500" />
                  <span className="text-gray-400">info@mediequip.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-teal-500" />
                  <span className="text-gray-400">24/7 Support Available</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates on latest medical equipment and special offers.
              </p>
              <form className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-teal-600 text-white rounded-r hover:bg-teal-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Certifications Bar */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {['ISO 13485', 'CE Certified', 'FDA Approved', 'GMP Certified'].map((cert) => (
                <div key={cert} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                  <span className="text-gray-400">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} MediEquip. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence Indicator */}
        <div className="absolute bottom-0 right-0 p-4 hidden lg:block">
          <div className="flex items-center text-teal-500">
            <Globe className="w-5 h-5 mr-2 animate-spin-slow" />
            <span className="text-sm">Global Presence in 50+ Countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default function Home(){
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MedicalEquipmentGrid />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}