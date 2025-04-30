import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-orange-500 rounded"></div>
                <div className="h-8 w-8 bg-blue-400 rounded ml-1"></div>
              </div>
              <div>
                <h3 className="text-sm font-bold">German University</h3>
                <h4 className="text-xs font-bold">of Digital Science <span className="text-orange-500">Innovation</span></h4>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Our integrated ecosystem connects academic excellence with entrepreneurial practice through strategic investments and services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#ecosystem" className="text-gray-400 hover:text-white transition-colors">Ecosystem</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#structure" className="text-gray-400 hover:text-white transition-colors">Structure</a></li>
              <li><a href="#business" className="text-gray-400 hover:text-white transition-colors">Business Model</a></li>
              <li><a href="#invest" className="text-gray-400 hover:text-white transition-colors">Invest</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Key Verticals</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Digital Entrepreneurship</li>
              <li>Virtual Education</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Digital Management</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Investment Updates</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest investment opportunities and innovations.
            </p>
            <form className="space-y-3">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-br-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white" />
              <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-br-md hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} German University of Digital Science Innovation GmbH. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;