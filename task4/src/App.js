import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./components/BlogPage";
import BlogPost from "./components/BlogPost";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <BlogPage
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              }
            />
            <Route path="/post/:id" element={<BlogPost />} />

            {/* About Page */}
            <Route
              path="/about"
              element={
                <div className="p-8 max-w-3xl mx-auto text-center">
                  <h1 className="text-3xl font-bold text-blue-600 mb-4">
                    About This Blog
                  </h1>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Hi 👋 I’m currently learning <strong>React.js</strong> and
                    this blog is a small project I built to practice concepts
                    like routing, components, and state management.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You’ll find posts about different topics like{" "}
                    <span className="font-semibold">Tech, Food, and Travel</span>
                    . These categories are just placeholders to make the blog
                    look real while I practice my skills.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Thanks for checking it out! 🚀
                  </p>
                </div>
              }
            />

            {/* Contact Page */}
            <Route
              path="/contact"
              element={
                <div className="p-8 max-w-xl mx-auto text-center">
                  <h1 className="text-3xl font-bold text-blue-600 mb-4">
                    Contact Me
                  </h1>
                  <p className="text-gray-700 mb-6">
                    This is a demo contact page. Since this is a learning
                    project, the form won’t actually send messages — but it
                    shows how a contact form can look!
                  </p>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Send (Demo)
                    </button>
                  </form>
                </div>
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
