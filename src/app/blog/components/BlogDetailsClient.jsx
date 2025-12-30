'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import '@/styles/blog-details.css';

const BlogDetailsClient = ({ slug, initialBlog = null, initialRelatedBlogs = [], initialError = null }) => {
  const [blog, setBlog] = useState(initialBlog);
  const [relatedBlogs, setRelatedBlogs] = useState(initialRelatedBlogs);
  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(!initialBlog && !initialError);

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
  }, [relatedBlogs]);

  // Add ref to each blog card
  const addToRefs = (el) => {
    if (el && !blogCardsRef.current.includes(el)) {
      blogCardsRef.current.push(el);
    }
  };

  // Generate structured data for SEO
  const blogStructuredData = blog ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': blog.title,
    'description': blog.excerpt,
    'datePublished': new Date(blog.date).toISOString(),
    'author': {
      '@type': 'Person',
      'name': blog.author || 'Robato Systems Team',
      'jobTitle': blog.authorRole || 'Expert'
    },
    'image': blog.image ? `https://robatosystem.com${blog.image}` : undefined,
    'url': `https://robatosystem.com/blog/${slug}`,
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
      '@id': `https://robatosystem.com/blog/${slug}`
    },
    'keywords': [blog.category, 'Industrial Automation', 'Security Solutions']
  } : {};

  // Loading state
  if (loading) {
    return (
      <div className="blog-detail-loading">
        <div className="blog-detail-loading-spinner"></div>
        <p>Loading blog content...</p>
      </div>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <div className="blog-detail-error">
        <div className="blog-detail-error-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3>Blog Not Found</h3>
        <p>The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/blog" className="back-to-blogs-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
      <div className="blog-detail-wrapper">
        {/* Blog Header */}
        <div className="blog-detail-header">
          {blog.category && (
            <div className="blog-detail-category">{blog.category}</div>
          )}
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-meta">
            <div className="blog-detail-date">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {blog.date}
            </div>
            {blog.readTime && (
              <div className="blog-detail-reading-time">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {blog.readTime}
              </div>
            )}
          </div>
        </div>

        {/* Featured Image */}
        {blog.image && (
          <div className="blog-detail-featured-image">
            <Image
              src={blog.image}
              alt={blog.title}
              width={900}
              height={450}
              className="blog-detail-hero-image"
              priority
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="blog-detail-content">
          <div className="blog-detail-excerpt">
            {blog.excerpt}
          </div>
          <div className="blog-detail-content-text">
            {blog.content ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              <div className="blog-detail-placeholder-content">
                <p>Full blog content will be available soon. This is a placeholder for the complete article.</p>
                <p>In the meantime, feel free to explore our other blog posts or contact us for more information about this topic.</p>
              </div>
            )}
          </div>
        </div>

        {/* Author Section */}
        <div className="blog-detail-author">
          <h3 className="blog-detail-author-section-title">About the Author</h3>
          <div className="blog-detail-author-card">
            <div className="blog-detail-author-avatar">
              {blog.author ? blog.author.charAt(0).toUpperCase() : 'RS'}
            </div>
            <div className="blog-detail-author-info">
              <h4>{blog.author || 'Robato System'}</h4>
              <p className="blog-detail-author-bio">
                {blog.authorRole || 'Leading provider of innovative technology solutions for industrial automation and smart systems.'}
              </p>
              <div className="blog-detail-author-date">Published on {blog.date}</div>
            </div>
          </div>
        </div>

        {/* Social Share - Client Side Interaction */}
        <div className="blog-detail-share">
          <h3 className="blog-detail-share-section-title">Share this article</h3>
          <div className="blog-detail-share-buttons">
            <button 
              className="blog-detail-share-button linkedin"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`, '_blank');
                }
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </button>
            <button 
              className="blog-detail-share-button twitter"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
                }
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
              Twitter
            </button>
            <button 
              className="blog-detail-share-button facebook"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
                }
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Related Blogs - Client Side Animations */}
        {relatedBlogs.length > 0 && (
          <div className="blog-detail-related">
            <h3 className="blog-detail-related-section-title">Related Articles</h3>
            <div className="blog-detail-related-blogs-grid">
              {relatedBlogs.map(relatedBlog => (
                <Link 
                  key={relatedBlog.id} 
                  href={`/blog/${relatedBlog.slug || relatedBlog.link?.replace('/blog/', '')}`} 
                  className="blog-detail-related-blog-card"
                  ref={addToRefs}
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                  }}
                >
                  <h4 className="blog-detail-related-blog-title">{relatedBlog.title}</h4>
                  <p className="blog-detail-related-blog-excerpt">{relatedBlog.excerpt}</p>
                  <div className="blog-detail-related-blog-date">{relatedBlog.date}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetailsClient;
