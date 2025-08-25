import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Welcome to <span className="font-semibold text-blue-600">TechSphere Blog</span>, 
        where we share tutorials, guides, and updates about the latest technologies, 
        web development, and AI trends.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">🚀 Our Mission</h2>
          <p className="text-gray-600">
            To simplify complex tech concepts and make learning enjoyable for everyone.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">💡 Why This Blog?</h2>
          <p className="text-gray-600">
            Because technology never stops growing — and neither should we.
          </p>
        </div>
      </div>
    </div>
  );
}
