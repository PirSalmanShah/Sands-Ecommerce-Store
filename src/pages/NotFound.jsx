import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 text-center">
      
    
      <h1 className="text-9xl font-bold text-amber-500 mb-2">404</h1>
      
    
      <h2 className="text-2xl font-semibold text-white mb-2">Page Not Found</h2>
      <p className="text-neutral-500 mb-8">The page you're looking for doesn't exist.</p>
      
      
      <Link 
        to="/" 
        className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-neutral-200 transition-colors"
      >
        Go Home
      </Link>
      
    </div>
  );
};

export default NotFound;