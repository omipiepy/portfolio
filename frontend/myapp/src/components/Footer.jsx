import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="py-8 bg-white text-slate-500">
      
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-primary">Kohinoor</h1>
            <h1 className="text-sm">Kathmandu, Nepal</h1>
          </div>
        <div className="flex flex-col items-start md:items-end">
          <h1 className="text-xl font-semibold mb-2">Connect with me</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Contact Me</button>
        </div>
        </div>

        <div className="mt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Kohinoor. All rights reserved.
        </div>
      
    </footer>
  );
};

export default Footer;
