import React from 'react';
import { Building, Globe, Award } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
            Our Investment Portfolio
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Strategic Investments in the Digital Future
          </h2>
          <p className="text-gray-600">
            Our core business combines strategic investments with consulting services and innovation utilization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-br-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-12 h-12 rounded-br-lg flex items-center justify-center text-orange-600 mb-6">
              <Building size={24} />
            </div>
            <h3 className="text-xl font-bold text-orange-500 mb-3">German UDS Service GmbH</h3>
            <p className="text-gray-600">
              100% stake responsible for the IT infrastructure - both for the university and for external business partners.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-br-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-12 h-12 rounded-br-lg flex items-center justify-center text-orange-600 mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-orange-500 mb-3">FB Cloudhouse GmbH</h3>
            <p className="text-gray-600">
              20% stake in FB Cloudhouse GmbH handling administrative tasks and rental of space for the university and third parties.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-br-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 w-12 h-12 rounded-br-lg flex items-center justify-center text-orange-600 mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-orange-500 mb-3">German UDS gGmbH</h3>
            <p className="text-gray-600">
              20% participation in German UDS gGmbH (guarantee of creative involvement in the German University of Digital Science)
            </p>
          </div>
        </div>
        
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="bg-white p-6 rounded-br-xl shadow-lg">
            <h3 className="text-xl font-bold text-orange-500 mb-6 text-center">Our Investment Structure</h3>
            <div className="relative h-96">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-100 p-6 rounded-br-xl w-64 text-center">
                <h4 className="font-bold text-orange-500">German UDS Innovation GmbH</h4>
              </div>
              
              <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 p-3 rounded-br-xl w-48 text-center">
                <h5 className="font-semibold text-blue-700">German UDS Service GmbH</h5>
                <p className="text-xs text-blue-700">100% Stake</p>
              </div>
              
              <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 p-3 rounded-br-xl w-48 text-center">
                <h5 className="font-semibold text-blue-700">FB Cloudhouse GmbH</h5>
                <p className="text-xs text-blue-700">20% Stake</p>
              </div>
              
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 p-3 rounded-br-xl w-48 text-center">
                <h5 className="font-semibold text-blue-700">German UDS gGmbH</h5>
                <p className="text-xs text-blue-700">20% Stake</p>
              </div>
              
              <div className="absolute top-1/2 left-1/4 h-32 w-px bg-gray-300"></div>
              <div className="absolute top-1/2 left-3/4 h-32 w-px bg-gray-300"></div>
              <div className="absolute top-1/4 left-1/2 h-32 w-px bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;