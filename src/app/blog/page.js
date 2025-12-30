import { blogService } from '@/services/blogService';
import BlogListClient from './components/BlogListClient';

// Generate metadata for SEO
export async function generateMetadata() {
  try {
    const response = await blogService.getAllBlogs();
    
    if (response.success && response.data.length > 0) {
      const latestBlog = response.data[0];
      return {
        title: "Blog | Robato System",
        description: "Latest insights and articles on Industrial Automation, Security Solutions, and Smart Manufacturing from Robato System experts",
        keywords: "industrial automation, security solutions, smart manufacturing, parking systems, access control, AI technology",
        openGraph: {
          title: "Blog | Robato System",
          description: "Latest insights and articles on Industrial Automation, Security Solutions, and Smart Manufacturing from Robato System experts",
          type: "website",
          url: "https://robatosystem.com/blog",
          images: response.data.slice(0, 3).map(blog => ({
            url: `https://robatosystem.com${blog.image}`,
            width: 1200,
            height: 630,
            alt: blog.title,
          })),
        },
        twitter: {
          card: "summary_large_image",
          title: "Blog | Robato System",
          description: "Latest insights and articles on Industrial Automation, Security Solutions, and Smart Manufacturing from Robato System experts",
          images: response.data.slice(0, 1).map(blog => ({
            url: `https://robatosystem.com${blog.image}`,
            width: 1200,
            height: 630,
            alt: blog.title,
          })),
        },
        alternates: {
          canonical: "https://robatosystem.com/blog",
        },
      };
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
  }

  // Fallback metadata
  return {
    title: "Blog | Robato System",
    description: "Latest insights and articles on Industrial Automation, Security Solutions, and Smart Manufacturing from Robato System experts",
    keywords: "industrial automation, security solutions, smart manufacturing, parking systems, access control, AI technology",
  };
}

// Server Component - fetch data on server
export default async function BlogPage() {
  // Fetch blogs on server for SSR and SEO
  let blogs = [];
  let error = null;

  try {
    const response = await blogService.getAllBlogs();
    if (response.success) {
      blogs = response.data;
    } else {
      error = response.message || 'Failed to fetch blogs';
    }
  } catch (err) {
    console.error('Error fetching blogs in SSR:', err);
    error = 'Failed to fetch blogs';
  }

  // Pass server-fetched data to client component
  return <BlogListClient initialBlogs={blogs} initialError={error} />;
}
