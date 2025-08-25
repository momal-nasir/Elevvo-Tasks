// src/components/BlogCard.js
import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <Link
      to={`/post/${post.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

        {/* ✅ Only show date if available */}
        {post.date && (
          <p className="text-gray-600 text-sm mb-2">{post.date}</p>
        )}

        <p className="text-gray-700 line-clamp-2">{post.description}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
