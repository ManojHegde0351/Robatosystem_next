'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import styles from '@/styles/Blog/BlogPosts.module.css';

// Blog posts data
const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of Industrial Automation: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping the future of industrial automation and how businesses can stay ahead of the curve.',
    date: 'JUNE 15, 2025',
    image: '/images/blogs/industry-automation.jpg',
    link: '/blog/industrial-automation-trends-2025',
    category: 'Industrial Automation',
    readTime: '5 min read',
    author: 'Alex Johnson',
    authorRole: 'Automation Expert'
  },
  {
    id: 2,
    title: 'Enhancing Workplace Safety with Smart Security Solutions',
    excerpt: 'Discover how smart security solutions are revolutionizing workplace safety in industrial environments.',
    date: 'JUNE 10, 2025',
    image: '/images/blogs/smart-parking.jpg',
    link: '/blog/smart-security-solutions',
    category: 'Security Solutions',
    readTime: '4 min read',
    author: 'Sarah Williams',
    authorRole: 'Security Specialist'
  },
  {
    id: 3,
    title: 'The Role of AI in Modern Manufacturing',
    excerpt: 'Learn how artificial intelligence is transforming manufacturing processes and driving efficiency.',
    date: 'JUNE 5, 2025',
    image: '/images/blogs/access-controler.jpg',
    link: '/blog/access-control',
    category: 'AI & Technology',
    readTime: '6 min read',
    author: 'Michael Chen',
    authorRole: 'AI Research Lead'
  },
  {
    id: 4,
    title: 'Sustainable Parking Solutions for Urban Development',
    excerpt: 'Exploring eco-friendly parking technologies that support sustainable urban planning and reduce environmental impact.',
    date: 'MAY 28, 2025',
    image: '/images/blogs/industry-automation.jpg',
    link: '/blog/sustainable-parking-solutions',
    category: 'Sustainability',
    readTime: '5 min read',
    author: 'Emma Davis',
    authorRole: 'Urban Planning Specialist',
    authorAvatar: '/images/team/emma-davis.jpg'
  },
  {
    id: 5,
    title: 'Integration of IoT in Smart Parking Systems',
    excerpt: 'How Internet of Things technology is revolutionizing parking management and providing real-time insights.',
    date: 'MAY 20, 2025',
    image: '/images/blogs/smart-parking.jpg',
    link: '/blog/iot-smart-parking',
    category: 'IoT',
    readTime: '4 min read',
    author: 'David Kim',
    authorRole: 'IoT Solutions Architect',
    authorAvatar: '/images/team/david-kim.jpg'
  },
  {
    id: 6,
    title: 'Access Control Systems: Security and Convenience',
    excerpt: 'Balancing advanced security measures with user-friendly access control solutions for modern facilities.',
    date: 'MAY 15, 2025',
    image: '/images/blogs/access-controler.jpg',
    link: '/blog/access-control-security',
    category: 'Security',
    readTime: '3 min read',
    author: 'James Wilson',
    authorRole: 'Security Systems Engineer',
    authorAvatar: '/images/team/james-wilson.jpg'
  }
];

const BlogClient = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Derive filtered blogs from search term
  const filteredBlogs = BLOG_POSTS.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
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
    'blogPost': BLOG_POSTS.map(post => ({
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
  }, []);

  // Add ref to each blog card
  const addToRefs = (el) => {
    if (el && !blogCardsRef.current.includes(el)) {
      blogCardsRef.current.push(el);
    }
  };

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

export default BlogClient;
