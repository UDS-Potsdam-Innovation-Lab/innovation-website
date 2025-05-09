import React from 'react';
import { ChevronRight } from 'lucide-react';

const EcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src="/images/institutions_overview.png" alt="Digital Innovation Ecosystem" className="rounded-br-xl shadow-lg transform hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
              Our Digital Innovation Ecosystem
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Connecting Academic Excellence with Entrepreneurial Practice
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-orange-500 mb-3">Purpose</h3>
              <p className="text-gray-700 mb-4">
                As a catalyst, German UDS Innovation GmbH promotes sustainable technology 
                transfer between science and industry and achieves attractive returns on investment. 
                Our integrated ecosystem connects academic excellence with entrepreneurial practice.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-3">Vision</h3>
              <p className="text-gray-700 mb-4">
                Establish a successful investment company in digital innovations. 
                Act as a catalyst for technology transfer between science and industry.
              </p>
            </div>
            
            <div className="mt-8">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-br-xl shadow-md hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <span>Learn About Our Strategy</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;