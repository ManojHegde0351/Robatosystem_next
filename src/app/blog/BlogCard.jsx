

import Link from "next/link";
import Image from "next/image";
import "@/styles/Blog/blog-cards.css";

export default function BlogCard({ id, image, date, title, description }) {
  return (
    <div className="blog-card">
      <div className="blog-card-image-wrapper">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="blog-card-image"
        />
      </div>

      <div className="blog-card-content">
        <p className="blog-card-date">{date}</p>

        <h3 className="blog-card-title">{title}</h3>

        <p className="blog-card-description">{description}</p>

        <Link href={`/blog/${id}`} className="blog-card-readmore">
          Read More →
        </Link>
      </div>
    </div>
  );
}
