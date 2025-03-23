
import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1F2C] py-4 px-6 mt-auto">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-gray-400 flex items-center gap-1 text-sm">
          Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by{' '}
          <a 
            href="https://necxor.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#6366F1] hover:text-[#818CF8] transition-colors flex items-center gap-1"
          >
            NECXOR <ExternalLink className="h-3 w-3" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
