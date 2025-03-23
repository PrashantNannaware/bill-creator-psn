
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Billify
        </Link>
        <div className="flex items-center space-x-4">
          {/* Add navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
