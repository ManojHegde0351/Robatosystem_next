"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import { FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { createPortal } from 'react-dom';
import EnquiryModal from "./EnquiryModal";
import "../styles/header.css";

const Header = () => {
  const navRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    setClickPosition({ x: e.clientX, y: e.clientY });
    setShowEnquiry(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };
  
  // Function to get active link class
  const getActiveClass = (isActive) => 
    isActive 
      ? 'active text-gray-900' 
      : 'text-gray-700 hover:text-blue-600';

  useEffect(() => {
    let isDesktop = false;
    
    const handleScroll = () => {
      // Only apply sticky on desktop (min-width: 769px)
      if (isDesktop) {
        if (window.scrollY > 10) {
          navRef.current?.classList.add('sticky');
        } else {
          navRef.current?.classList.remove('sticky');
        }
      }
    };

    const handleResize = () => {
      isDesktop = window.innerWidth > 768;
    };

    // Initial check
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        {/* Hamburger Menu Button - Mobile First */}
        <button 
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Logo on the left */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Robato System Logo"
              width={250}
              height={100}
              className="cursor-pointer header-logo"
              priority
              quality={60}
              style={{
                maxWidth: '200px',
                height: 'auto',
                transition: 'none'
              }}
            />
          </Link>
        </div>

        {/* Phone number in the center - Desktop Only */}
        <div className="phone-number desktop-only flex items-center text-lg font-semibold text-gray-800">
          <FaPhone className="mr-2 text-blue-600" />
          <a href="tel:+91 7888711383" className="hover:text-blue-600 whitespace-nowrap" style={{transition: 'none'}}>
          Make a call: +91 7888711383
          </a>
        </div>

        {/* Social icons on the right - Desktop Only */}
        <div className="social-icons desktop-only flex items-center space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition" aria-label="Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800 transition" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800 transition" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800 transition" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar" ref={navRef}>
        <div className="nav-container">
          {/* Navigation Links */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li className="relative group">
              <Link 
                href="/" 
                className={`nav-link px-4 py-2 rounded-md transition-all duration-300 ${getActiveClass(isActive('/'))} relative group`}
                onClick={closeMobileMenu}
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="/blog" 
                className={`nav-link px-4 py-2 rounded-md transition-all duration-300 ${getActiveClass(isActive('/blog'))} relative group`}
                onClick={closeMobileMenu}
              >
                Blogs
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="/product" 
                className={`nav-link px-4 py-2 rounded-md transition-all duration-300 ${getActiveClass(isActive('/product'))} relative group`}
                onClick={closeMobileMenu}
              >
                Products
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="/contact" 
                className={`nav-link px-4 py-2 rounded-md transition-all duration-300 ${getActiveClass(isActive('/contact'))} relative group`}
                onClick={closeMobileMenu}
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="/becomeAPartner" 
                className={`nav-link px-4 py-2 rounded-md transition-all duration-300 ${getActiveClass(isActive('/becomeAPartner'))} relative group`}
                onClick={closeMobileMenu}
              >
                Become a Partner
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link 
                href="/about" 
                className={`nav-link px-4 py-2 rounded-md transition-all duration-300 ${getActiveClass(isActive('/about'))} relative group`}
                onClick={closeMobileMenu}
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="relative group">
              <a 
                href="#" 
                onClick={(e) => {
                  handleEnquiryClick(e);
                  closeMobileMenu();
                }}
                className="nav-link px-4 py-2 rounded-md transition-all duration-300 text-gray-700 hover:text-blue-600 relative group"
              >
                Enquiry
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>

          {/* Free Demo Button */}
          <button 
            className="Header-demo-button"
            onClick={() => {
              router.push('/contact');
              closeMobileMenu();
            }}
            suppressHydrationWarning
          >
            Free Demo
          </button>

        </div>
      </nav>
      
{typeof window !== 'undefined' && showEnquiry && createPortal(
        <EnquiryModal 
          isOpen={showEnquiry} 
          onClose={() => setShowEnquiry(false)} 
          clickPosition={clickPosition}
        />,
        document.body
      )}
    </header>
  );
};

export default Header;
