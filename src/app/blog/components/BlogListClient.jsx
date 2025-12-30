'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import styles from '@/styles/Blog/BlogPosts.module.css';

const BlogListClient = ({ initialBlogs = [], initialError = null }) => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initialError);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Derive filtered blogs from search term
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (blog.category && blog.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (blog.author && blog.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      setShowBackToTop(window.scrollY > 300);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add ref for intersection observer
  const blogCardsRef = useRef([]);

  // Set up intersection observer for scroll animations
  useEffect(() => {
    const currentCards = blogCardsRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    // Observe all blog cards
    currentCards.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, [blogs]);

  // Add ref to each blog card
  const addToRefs = (el) => {
    if (el && !blogCardsRef.current.includes(el)) {
      blogCardsRef.current.push(el);
    }
  };

  // Generate structured data for SEO
  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://robatosystem.com/blog',
    'headline': 'Latest Insights & Articles on Industrial Automation',
    'description': 'Expert insights and latest trends in industrial automation, security solutions, and smart manufacturing.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Robato Systems',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://robatosystem.com/images/logo.png'
      }
    },
    'blogPost': blogs.map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'datePublished': new Date(post.date).toISOString(),
      'author': {
        '@type': 'Person',
        'name': post.author || 'Robato Systems Team',
        'jobTitle': post.authorRole || 'Expert'
      },
      'image': post.image ? `https://robatosystem.com${post.image}` : undefined,
      'url': `https://robatosystem.com${post.link}`,
      'publisher': {
        '@type': 'Organization',
        'name': 'Robato Systems',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://robatosystem.com/images/logo.png'
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `https://robatosystem.com${post.link}`
      },
      'keywords': [post.category, 'Industrial Automation', 'Security Solutions']
    }))
  };

  // Loading state
  if (loading) {
    return (
      <div className={styles.blogsSection}>
        <div className={styles.blogsContainer}>
          <div className={`${styles.sectionHeader} ${styles.blogPageHeader}`}>
            <h2 className={styles.sectionTitle}>Latest <span>Insights</span></h2>
            <p className={styles.sectionSubtitle}>Stay updated with the latest trends and news in industrial automation and security solutions.</p>
          </div>
          
          {/* Search Box */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <svg
                className={styles.searchIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search blogs by title, category, or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
          
          <div className={styles.blogsGrid}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className={`${styles.blogCard} loading-skeleton`}>
                <div className={styles.blogImageContainer}>
                  <div className="skeleton-image"></div>
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <div className="skeleton-date"></div>
                    <div className="skeleton-category"></div>
                  </div>
                  <div className="skeleton-title"></div>
                  <div className="skeleton-excerpt"></div>
                  <div className={styles.blogFooter}>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorDetails}>
                        <div className="skeleton-author"></div>
                        <div className="skeleton-role"></div>
                      </div>
                    </div>
                    <div className="skeleton-readTime"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // No blogs available state
  if (blogs.length === 0 && !loading) {
    return (
      <div className={styles.blogsSection}>
        <div className={styles.blogsContainer}>
          <div className={`${styles.sectionHeader} ${styles.blogPageHeader}`}>
            <h2 className={styles.sectionTitle}>Latest <span>Insights</span></h2>
            <p className={styles.sectionSubtitle}>Stay updated with the latest trends and news in industrial automation and security solutions.</p>
          </div>
          
          <div className="no-blogs-container">
            <div className="no-blogs-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="no-blogs-content">
              <h3>No Blogs Available</h3>
              <p>We&apos;re working on bringing you the latest insights and industry updates. Check back soon for informative articles on industrial automation, security solutions, and smart manufacturing!</p>
              <div className="no-blogs-actions">
                <Link href="/" className="back-home-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogsSection}>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
      <div className={styles.blogsContainer}>
        <div className={`${styles.sectionHeader} ${styles.blogPageHeader}`}>
          <h2 className={styles.sectionTitle}>Latest <span>Insights</span></h2>
          <p className={styles.sectionSubtitle}>Stay updated with the latest trends and news in industrial automation and security solutions.</p>
        </div>
        
        {/* Search Box - Client Side Interaction */}
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <svg
              className={styles.searchIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search blogs by title, category, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className={styles.clearButton}
                aria-label="Clear search"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
          {searchTerm && (
            <div className={styles.searchResults}>
              Found {filteredBlogs.length} result{filteredBlogs.length !== 1 ? 's' : ''} for &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>
        
        {/* Blog Grid - Client Side Animations */}
        <div className={styles.blogsGrid}>
          {filteredBlogs.map((blog, index) => (
            <article
              key={blog.id}
              ref={addToRefs}
              className={styles.blogCard}
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
              itemScope
              itemType="http://schema.org/BlogPosting"
            >
              <Link href={blog.link} className={styles.blogLink} itemProp="url">
                <div className={styles.blogImageContainer}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className={styles.blogImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    itemProp="image"
                  />
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogDate} itemProp="datePublished">{blog.date}</span>
                    {blog.category && (
                      <span className={styles.blogCategory} itemProp="keywords">{blog.category}</span>
                    )}
                  </div>
                  <h3 className={styles.blogTitle} itemProp="headline">{blog.title}</h3>
                  <p className={styles.blogExcerpt} itemProp="description">{blog.excerpt}</p>
                  <div className={styles.blogFooter}>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorDetails}>
                        <span className={styles.authorName}>{blog.author}</span>
                        <span className={styles.authorRole}>{blog.authorRole}</span>
                      </div>
                    </div>
                    <span className={styles.readTime}>
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
      
      {/* Back to Top Button - Client Side Interaction */}
      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
        <span>Back to Top</span>
      </button>
    </div>
  );
};

export default BlogListClient;
