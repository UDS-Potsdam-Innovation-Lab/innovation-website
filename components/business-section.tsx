import React from 'react';

const BusinessSection: React.FC = () => {
  return (
    <section id="business" className="py-20 px-6 bg-blue-900 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded-br-xl text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Business Model
          </h2>
          <p className="text-gray-300">
            Our core business combines strategic investments with consulting services and innovation utilization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-br-xl border border-gray-700">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">1. Investments</h3>
            </div>
            <p className="text-gray-300">
              Strategic development of companies in collaboration with the German University of Digital Science
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-br-xl border border-gray-700">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">2. Consulting and Services</h3>
            </div>
            <p className="text-gray-300">
              IT, Marketing, Sales, Personnel and Project Development
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-br-xl border border-gray-700">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">3. Innovation</h3>
            </div>
            <p className="text-gray-300">
              Research to market transfer, Open source
            </p>
          </div>
          
          <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-br-xl border border-gray-700">
            <div className="text-orange-300 mb-4">
              <h3 className="text-xl font-bold mb-1">4. Planned Vertical Shareholding</h3>
            </div>
            <p className="text-gray-300">
              Professor and Research Center involvement structure
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white bg-opacity-5 rounded-br-xl p-8">
            <h3 className="text-2xl font-bold mb-10 text-center">Financial Strategy</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">Investment Requirements</h4>
                  <p className="text-gray-300">Initial phase: Build administrative infrastructure. Further development: Finance new investments and verticals.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">Income Sources</h4>
                  <p className="text-gray-300">Dividends from investments. Consulting fees. Government grants for innovation projects.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 bg-opacity-20 w-12 h-12 rounded-br-lg flex items-center justify-center text-white font-bold text-xl">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">Risk Management</h4>
                  <p className="text-gray-300">Diversified portfolio across technology sectors. Transparent reporting to investors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;