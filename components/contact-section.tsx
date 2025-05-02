import React from 'react';
import { ChevronRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Interested in Investing?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us to learn more about German UDS Innovation GmbH and discover how you can be part of our digital innovation ecosystem.
            </p>
            
            <div className="bg-white p-8 rounded-br-xl shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Digital Innovator</h3>
                <p className="text-gray-700 mb-4">
                  As a catalyst, German UDS Innovation GmbH promotes sustainable technology transfer between science and industry and achieves attractive returns on investment.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Mission</h3>
                <p className="text-gray-700 mb-4">
                  Promote innovation through targeted participation. Create value for investors. Connect German University of Digital Science and business through integration.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-br-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-br-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-br-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Investment Interest</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-br-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Company Shares</option>
                    <option>Capital Investment</option>
                    <option>Joint Ventures</option>
                    <option>Vertical Shareholding</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-br-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-br-md shadow-md hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <ChevronRight size={18} />
                </button>
              </form>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;