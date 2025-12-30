// Blog API service for fetching blog data from backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.robatosystem.com';

/**
 * @typedef {Object} BlogPost
 * @property {number} id - Blog post ID
 * @property {string} title - Blog post title
 * @property {string} excerpt - Blog post excerpt
 * @property {string} date - Blog post date
 * @property {string} image - Blog post image URL
 * @property {string} link - Blog post link
 * @property {string} [category] - Blog post category
 * @property {string} [readTime] - Estimated read time
 * @property {string} [author] - Author name
 * @property {string} [authorRole] - Author role
 * @property {string} [authorAvatar] - Author avatar URL
 */

/**
 * @typedef {Object} BlogResponse
 * @property {boolean} success - Success status
 * @property {BlogPost[]} data - Blog posts data
 * @property {string} [message] - Response message
 */

class BlogService {
  /**
   * Fetch all blog posts from the backend
   * @returns {Promise<BlogResponse>}
   */
  async getAllBlogs() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // Ensure fresh data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Return empty array on error to prevent UI crashes
      return {
        success: false,
        data: [],
        message: 'Failed to fetch blogs'
      };
    }
  }

  /**
   * Fetch featured blogs for homepage (limited number)
   * @param {number} limit - Number of blogs to fetch
   * @returns {Promise<BlogResponse>}
   */
  async getFeaturedBlogs(limit = 3) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/featured?limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching featured blogs:', error);
      return {
        success: false,
        data: [],
        message: 'Failed to fetch featured blogs'
      };
    }
  }

  /**
   * Search blogs by query
   * @param {string} query - Search query
   * @returns {Promise<BlogResponse>}
   */
  async searchBlogs(query) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/search?q=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching blogs:', error);
      return {
        success: false,
        data: [],
        message: 'Failed to search blogs'
      };
    }
  }

  /**
   * Get single blog by ID
   * @param {number} id - Blog ID
   * @returns {Promise<{success: boolean, data: BlogPost|null, message?: string}>}
   */
  async getBlogById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blog:', error);
      return {
        success: false,
        data: null,
        message: 'Failed to fetch blog'
      };
    }
  }
}

export const blogService = new BlogService();
