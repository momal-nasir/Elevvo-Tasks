// // src/components/Navbar.js
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const categories = ["Tech", "Travel", "Food"];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           My Blog
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 `text-gray-700 hover:text-blue-600 ${
//                   isActive ? "font-semibold text-blue-600" : ""
//                 }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}

//           {/* Categories dropdown */}
//           <div className="relative group">
//             <button className="text-gray-700 hover:text-blue-600">
//               Categories ▾
//             </button>
//             <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg py-2 w-40">
//               {categories.map((cat) => (
//                 <Link
//                   key={cat}
//                   to="/"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   {cat}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Search bar (dummy) */}
//           <input
//             type="text"
//             placeholder="Search..."
//             className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 text-xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className="block text-gray-700 hover:text-blue-600"
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.name}
//             </NavLink>
//           ))}

//           <div>
//             <p className="font-semibold text-gray-600 mb-2">Categories</p>
//             {categories.map((cat) => (
//               <Link
//                 key={cat}
//                 to="/"
//                 className="block text-gray-700 hover:text-blue-600"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {cat}
//               </Link>
//             ))}
//           </div>

//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
// src/components/Navbar.js
// src/components/Navbar.js
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = ["Tech", "Food", "Travel"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          My Blog
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Categories dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600">
              Categories ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg py-2 w-40">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Search bar (dummy) */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <div>
            <p className="font-semibold text-gray-600 mb-2">Categories</p>
            {categories.map((cat) => (
              <Link
                key={cat}
                to="/"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {cat}
              </Link>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
