import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts"; // ✅ same dataset

function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <h2 className="text-center mt-10 text-red-500">Post not found!</h2>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">
        {post.date} • {post.category}
      </p>
      <p className="text-gray-800 leading-relaxed">{post.content}</p>

      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}

export default BlogPost;
