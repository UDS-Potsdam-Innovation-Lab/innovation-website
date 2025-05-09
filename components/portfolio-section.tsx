import React from 'react';
import { Building, Globe, Award } from 'lucide-react';
import ResponsiveImage from './responsive-image';

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
        {/* New images below the main portfolio grid */}
        <div className="flex flex-col gap-8 mt-16">
          <div className="flex justify-center">
            <ResponsiveImage
              src="/images/financial-support-commercial/investment_portfolio.png"
              alt="Investment Portfolio"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
          <div className="flex justify-center">
            <ResponsiveImage
              src="/images/financial-support-commercial/usp.png"
              alt="USP Vertical Structure"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;