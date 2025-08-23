// src/App.js
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
            <Route
              path="/about"
              element={<h1 className="p-6 text-center text-2xl">About Page</h1>}
            />
            <Route
              path="/contact"
              element={
                <h1 className="p-6 text-center text-2xl">Contact Page</h1>
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
