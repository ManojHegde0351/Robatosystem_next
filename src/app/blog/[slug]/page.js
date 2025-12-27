'use client';
import { use } from 'react';
import dynamic from 'next/dynamic';

const BlogDetails = dynamic(
    () => import('../BlogDetails'),
      { ssr: false }
);
      export default function Page({ params }) {
          const { slug } = use(params);
            return <BlogDetails slug={slug} />;
      }
        