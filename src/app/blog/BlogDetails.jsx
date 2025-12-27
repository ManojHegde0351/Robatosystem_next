

'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import '@/styles/blog-details.css';
export default function BlogDetails({ slug }) {

  // Mock blog data - replace with actual API call later
  const mockBlogs = useMemo(() => ({
    'industrial-automation-trends-2025': {
      id: 1,
      slug: 'industrial-automation-trends-2025',
      title: 'The Future of Industrial Automation: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping the future of industrial automation and how businesses can stay ahead of the curve.',
      date: 'JUNE 15, 2025',
      image: '/images/blogs/industry-automation.jpg',
      content: `
        <h2>Introduction to Industrial Automation</h2>
        <p>Industrial automation is revolutionizing manufacturing and production processes across the globe. As we move into 2025, the industry continues to evolve with unprecedented technologies that promise to reshape how businesses operate.</p>

        <h2>Current Trends Shaping the Future</h2>
        <p>The automation landscape is being transformed by several key trends:</p>

        <h3>AI and Machine Learning Integration</h3>
        <p>Artificial intelligence and machine learning are becoming integral parts of industrial automation systems, enabling predictive maintenance and intelligent decision-making.</p>

        <h3>IoT and Connected Devices</h3>
        <p>The proliferation of IoT devices creates a more interconnected manufacturing environment, allowing for real-time data collection and analysis.</p>

        <h3>Collaborative Robotics</h3>
        <p>Safe collaboration between humans and robots is becoming increasingly common in modern manufacturing facilities.</p>

        <h2>Benefits for Modern Businesses</h2>
        <p>Implementing these automation trends provides numerous benefits:</p>
        <ul>
          <li>Increased productivity and efficiency</li>
          <li>Improved product quality and consistency</li>
          <li>Enhanced worker safety</li>
          <li>Significant cost reductions</li>
          <li>Better data-driven decision making</li>
        </ul>
      `
    },
    'smart-security-solutions': {
      id: 2,
      slug: 'smart-security-solutions',
      title: 'Enhancing Workplace Safety with Smart Security Solutions',
      excerpt: 'Discover how smart security solutions are revolutionizing workplace safety in industrial environments.',
      date: 'JUNE 10, 2025',
      image: '/images/blogs/smart-parking.jpg',
      content: `
        <h2>The Evolution of Workplace Security</h2>
        <p>Smart security solutions represent the next generation of workplace protection, combining traditional security measures with cutting-edge technology to create comprehensive safety systems.</p>

        <h2>Modern Security Challenges</h2>
        <p>Today's industrial environments face unique security challenges that require innovative solutions:</p>

        <h3>Large-Scale Operations</h3>
        <p>Extensive facilities and multiple access points create complex security management needs.</p>

        <h3>Real-time Monitoring</h3>
        <p>The demand for immediate threat detection and response is critical in industrial settings.</p>

        <h3>Integration Requirements</h3>
        <p>Security systems must work seamlessly with existing infrastructure and processes.</p>

        <h2>Smart Security Technologies</h2>
        <p>Advanced technologies are transforming how we approach workplace security:</p>

        <h3>AI-Powered Surveillance</h3>
        <p>Machine learning algorithms can detect unusual behavior and potential security threats automatically.</p>

        <h3>Access Control Systems</h3>
        <p>Advanced access management solutions provide granular control over facility access while tracking personnel movements.</p>

        <h3>IoT-Connected Security</h3>
        <p>Connected devices create a comprehensive security network that provides complete coverage and real-time monitoring.</p>

        <h2>Benefits of Smart Security</h2>
        <p>Implementing smart security solutions offers numerous advantages:</p>
        <ul>
          <li>Enhanced protection against unauthorized access</li>
          <li>Real-time threat detection and response</li>
          <li>Comprehensive monitoring and reporting</li>
          <li>Reduced security costs through optimization</li>
          <li>Compliance with industry safety standards</li>
        </ul>
      `
    },
    'access-control': {
      id: 3,
      slug: 'access-control',
      title: 'The Role of AI in Modern Manufacturing',
      excerpt: 'Learn how artificial intelligence is transforming manufacturing processes and driving efficiency.',
      date: 'JUNE 5, 2025',
      image: '/images/blogs/access-controler.jpg',
      content: `
        <h2>AI Revolutionizing Manufacturing</h2>
        <p>Artificial intelligence is fundamentally changing how manufacturing companies operate, offering unprecedented levels of efficiency, precision, and innovation.</p>

        <h2>Current AI Applications</h2>
        <p>AI is being integrated into manufacturing processes in several key areas:</p>

        <h3>Predictive Maintenance</h3>
        <p>Machine learning algorithms analyze equipment data to predict maintenance needs before failures occur.</p>

        <h3>Quality Control</h3>
        <p>Computer vision systems inspect products with superhuman accuracy and speed.</p>

        <h3>Process Optimization</h3>
        <p>AI analyzes production data to identify inefficiencies and suggest improvements.</p>

        <h2>Manufacturing Benefits</h2>
        <p>The integration of AI into manufacturing processes delivers significant advantages:</p>
        <ul>
          <li>Reduced downtime through predictive maintenance</li>
          <li>Superior product quality and consistency</li>
          <li>Increased operational efficiency</li>
          <li>Cost savings through optimized operations</li>
          <li>Enhanced decision-making through data analysis</li>
        </ul>
      `
    }
  }), []);

  // Get blog data for current slug
  const blog = useMemo(() => mockBlogs[slug] || null, [mockBlogs, slug]);

  if (!blog) {
    return (
      <div className="blog-detail-loading">
        <div className="blog-detail-loading-spinner"></div>
        <p>Loading blog content...</p>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-wrapper">
        {/* Blog Header */}
        <div className="blog-detail-header">
          <div className="blog-detail-category">Technology</div>
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
            <div className="blog-detail-reading-time">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2"/>
              </svg>
              5 min read
            </div>
          </div>
        </div>

        {/* Featured Image */}
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

        {/* Blog Content */}
        <div className="blog-detail-content">
          <div className="blog-detail-excerpt">
            {blog.excerpt}
          </div>
          <div className="blog-detail-content-text">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </div>

        {/* Author Section */}
        <div className="blog-detail-author">
          <h3 className="blog-detail-author-section-title">About the Author</h3>
          <div className="blog-detail-author-card">
            <div className="blog-detail-author-avatar">RS</div>
            <div className="blog-detail-author-info">
              <h4>Robato System</h4>
              <p className="blog-detail-author-bio">Leading provider of innovative technology solutions for industrial automation and smart systems.</p>
              <div className="blog-detail-author-date">Published on {blog.date}</div>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="blog-detail-share">
          <h3 className="blog-detail-share-section-title">Share this article</h3>
          <div className="blog-detail-share-buttons">
            <button className="blog-detail-share-button linkedin">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </button>
            <button className="blog-detail-share-button twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
              Twitter
            </button>
            <button className="blog-detail-share-button facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Related Blogs */}
        <div className="blog-detail-related">
          <h3 className="blog-detail-related-section-title">Related Articles</h3>
          <div className="blog-detail-related-blogs-grid">
            {Object.values(mockBlogs).filter(relatedBlog => relatedBlog.id !== blog.id).slice(0, 3).map(relatedBlog => (
              <a key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`} className="blog-detail-related-blog-card">
                <h4 className="blog-detail-related-blog-title">{relatedBlog.title}</h4>
                <p className="blog-detail-related-blog-excerpt">{relatedBlog.excerpt}</p>
                <div className="blog-detail-related-blog-date">{relatedBlog.date}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
