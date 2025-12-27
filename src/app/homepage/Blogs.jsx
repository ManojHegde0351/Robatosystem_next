
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import '@/styles/home/blogs.css';

const Blogs = ({ isHomePage = false }) => {
  const blogs = [
    {
      id: 1,
      title: 'The Future of Industrial Automation: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping the future of industrial automation and how businesses can stay ahead of the curve.',
      date: 'JUNE 15, 2025',
      image: '/images/blogs/industry-automation.jpg',
      link: '/blog/industrial-automation-trends-2025'
    },
    {
      id: 2,
      title: 'Enhancing Workplace Safety with Smart Security Solutions',
      excerpt: 'Discover how smart security solutions are revolutionizing workplace safety in industrial environments.',
      date: 'JUNE 10, 2025',
      image: '/images/blogs/smart-parking.jpg',
      link: '/blog/smart-security-solutions'
    },
    {
      id: 3,
      title: 'The Role of AI in Modern Manufacturing',
      excerpt: 'Learn how artificial intelligence is transforming manufacturing processes and driving efficiency.',
      date: 'JUNE 5, 2025',
      image: '/images/blogs/access-controler.jpg',
      link: '/blog/access-control'
    }
  ];

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