import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </p>

        {/* Right */}
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Twitter
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
