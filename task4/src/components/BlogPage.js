import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Exploring the World of Technology",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1080&q=80", // tech/coding
    excerpt:
      "A dive into the latest trends in technology and how they are shaping our future.",
  },
  {
    id: 2,
    title: "Food Adventures: A Culinary Journey",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1080&q=80", // food
    excerpt:
      "Exploring different cuisines and the joy of discovering new flavors.",
  },
  {
    id: 3,
    title: "Travel Diaries: My Favorite Destinations",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80", // travel/beach
    excerpt:
      "Sharing my travel experiences and the beauty of the world I’ve seen.",
  },
  {
  id: 4,
  title: "Learning React: My Journey",
  category: "Tech",
  image:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1080&q=80", // working coding/learning image
  excerpt:
    "Documenting my journey as I learn and grow in React development.",
}
];

function BlogPage({ selectedCategory, setSelectedCategory }) {
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Filter buttons */}
      <div className="flex gap-4 mb-8 justify-center">
        {["All", "Tech", "Food", "Travel"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <Link
                to={`/post/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
