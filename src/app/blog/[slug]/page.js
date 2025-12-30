import { blogService } from '@/services/blogService';
import BlogDetailsClient from '../components/BlogDetailsClient';

// Generate metadata for individual blog post
export async function generateMetadata({ params }) {
  try {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    
    // Fetch all blogs to find the specific one
    const response = await blogService.getAllBlogs();
    
    if (response.success) {
      const blog = response.data.find(b => b.slug === slug || b.link === `/blog/${slug}`);
      
      if (blog) {
        return {
          title: `${blog.title} | Robato System`,
          description: blog.excerpt,
          keywords: `${blog.category}, industrial automation, security solutions, smart manufacturing, ${blog.author}`,
          openGraph: {
            title: blog.title,
            description: blog.excerpt,
            type: 'article',
            url: `https://robatosystem.com/blog/${slug}`,
            images: blog.image ? [{
              url: `https://robatosystem.com${blog.image}`,
              width: 1200,
              height: 630,
              alt: blog.title,
            }] : [],
            publishedTime: new Date(blog.date).toISOString(),
            author: blog.author || 'Robato System',
          },
          twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.excerpt,
            images: blog.image ? [{
              url: `https://robatosystem.com${blog.image}`,
              width: 1200,
              height: 630,
              alt: blog.title,
            }] : [],
          },
          alternates: {
            canonical: `https://robatosystem.com/blog/${slug}`,
          },
        };
      }
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
  }

  // Fallback metadata for blog not found
  return {
    title: "Blog Post | Robato System",
    description: "Latest insights and articles on Industrial Automation, Security Solutions, and Smart Manufacturing from Robato System experts",
  };
}

// Server Component - fetch data on server
async function BlogPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // Fetch blog data on server for SSR and SEO
  let blog = null;
  let relatedBlogs = [];
  let error = null;

  try {
    const allBlogsResponse = await blogService.getAllBlogs();
    
    if (allBlogsResponse.success) {
      // Find blog by slug
      const foundBlog = allBlogsResponse.data.find(b => b.slug === slug || b.link === `/blog/${slug}`);
      
      if (foundBlog) {
        blog = foundBlog;
        
        // Set related blogs (exclude current blog)
        relatedBlogs = allBlogsResponse.data
          .filter(b => b.id !== foundBlog.id)
          .slice(0, 3);
      } else {
        error = 'Blog not found';
      }
    } else {
      error = 'Failed to fetch blog';
    }
  } catch (err) {
    console.error('Error fetching blog in SSR:', err);
    error = 'Failed to load blog';
  }

  // Pass server-fetched data to client component
  return <BlogDetailsClient slug={slug} initialBlog={blog} initialRelatedBlogs={relatedBlogs} initialError={error} />;
}

export default BlogPage;