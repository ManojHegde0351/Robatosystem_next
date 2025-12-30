'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { blogService } from '@/services/blogService';

const Blogs = ({ isHomePage = false }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Only load CSS and fetch data after component mounts
  useEffect(() => {
    setMounted(true);
    import('@/styles/home/blogs.css');
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await blogService.getFeaturedBlogs(3);
        
        if (response.success && response.data.length > 0) {
          setBlogs(response.data);
        } else {
          // No blogs available or error occurred
          setBlogs([]);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [mounted]);

  // Don't render anything until mounted
  if (!mounted) {
    return (
      <section className="blogs-section">
        <div className="blogs-container">
          <div className={isHomePage ? "home-section-header" : "product-section-header"}>
            <h2>Latest Blogs</h2>
            <p>Insights & Industry Updates</p>
          </div>
          
          <div className="blogs-grid">
            {[1, 2, 3].map((index) => (
              <div key={index} className="blog-card loading-skeleton">
                <div className="blog-image-container">
                  <div className="skeleton-image"></div>
                </div>
                <div className="blog-content">
                  <div className="blog-text-content">
                    <div className="skeleton-date"></div>
                    <div className="skeleton-title"></div>
                    <div className="skeleton-excerpt"></div>
                  </div>
                  <div className="read-more-wrapper">
                    <div className="skeleton-button"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Loading skeleton
  if (loading) {
    return (
      <section className="blogs-section">
        <div className="blogs-container">
          <div className={isHomePage ? "home-section-header" : "product-section-header"}>
            <h2>Latest Blogs</h2>
            <p>Insights & Industry Updates</p>
          </div>
          
          <div className="blogs-grid">
            {[1, 2, 3].map((index) => (
              <div key={index} className="blog-card loading-skeleton">
                <div className="blog-image-container">
                  <div className="skeleton-image"></div>
                </div>
                <div className="blog-content">
                  <div className="blog-text-content">
                    <div className="skeleton-date"></div>
                    <div className="skeleton-title"></div>
                    <div className="skeleton-excerpt"></div>
                  </div>
                  <div className="read-more-wrapper">
                    <div className="skeleton-button"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // No blogs available state
  if (blogs.length === 0) {
    return (
      <section className="blogs-section">
        <div className="blogs-container">
          <div className={isHomePage ? "home-section-header" : "product-section-header"}>
            <h2>Latest Blogs</h2>
            <p>Insights & Industry Updates</p>
          </div>
          
          <div className="no-blogs-container">
            <div className="no-blogs-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="no-blogs-content">
              <h3>No Blogs Available</h3>
              <p>We're working on bringing you the latest insights and industry updates. Check back soon!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Display blogs
  return (
    <section className="blogs-section">
      <div className="blogs-container">
        <div className={isHomePage ? "home-section-header" : "product-section-header"}>
          <h2>Latest Blogs</h2>
          <p>Insights & Industry Updates</p>
        </div>
        
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <AnimateOnScroll 
              key={blog.id}
              className="blog-card"
              delay={blog.id * 0.1}
              distance="20px"
            >
              <article>
                <div className="blog-image-container">
                  <Image 
                    src={blog.image} 
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="blog-image"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-text-content">
                    <span className="blog-date">{blog.date}</span>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                  </div>
                  <div className="read-more-wrapper">
                    <Link href={blog.link} className="read-more" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center' }}>
                      Read More
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
        
        <div className="view-all-container">
          <Link href="/blog" className="view-all-button">
            View All Blogs
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;