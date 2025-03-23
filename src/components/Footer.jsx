
import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-gray-300 py-4 w-full mt-auto">
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center text-sm">
          Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> by 
          <a 
            href="https://necxor.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center ml-1 text-[#NECXOR] hover:underline"
          >
            <span className="text-[#6366f1]">NECXOR</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
