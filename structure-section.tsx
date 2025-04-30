import React from 'react';
import { Users, Globe, LightbulbIcon, Book, Sparkles, PiggyBank, Building } from 'lucide-react';

const StructureSection: React.FC = () => {
  return (
    <section id="structure" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
            Our Unique Approach
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Vertical Participation Structure
          </h2>
          <p className="text-gray-600">
            Our vertical structure directly involves professors and research centers in newly founded verticals.
            This transforms university research into marketable digital products and business models.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-br-xl shadow-lg">
            <h3 className="text-xl font-bold text-orange-500 mb-6">Key Topics for Verticals</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Users size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Digital Entrepreneurship College</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Marco Bade</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Globe size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Digital Education and Internet Technologies</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Christoph Meinel / Prof. Dr. Thomas Staubitz</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <LightbulbIcon size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Virtual Education and Digital Reality</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Mike Friedrichsen</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Book size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Multimodal Learning Technologies</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Daniele Di Mitri</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Artificial Intelligence</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Feiyu Xu / Prof. Dr. Felix Weitkämper</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <PiggyBank size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Cybersecurity</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Stuchtey</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-br-lg w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0 mt-1">
                  <Building size={16} />
                </div>
                <div>
                  <h4 className="font-semibold">Digital Management and New Work</h4>
                  <p className="text-gray-600 text-sm">Prof. Dr. Georg Loscher</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-br-xl shadow-lg flex items-center">
            <div>
              <h3 className="text-xl font-bold text-orange-500 mb-6">Vertical Structure</h3>
              <p className="text-gray-700 mb-6">
                Our unique structure allows for direct involvement of professors and research centers in newly founded verticals.
              </p>
              
              <div className="relative mt-12 pb-8">
                <div className="absolute top-0 left-1/4 transform -translate-x-1/2 bg-orange-100 p-3 rounded-br-xl w-40 text-center">
                  <h5 className="font-semibold text-orange-500">German UDS Innovation GmbH</h5>
                </div>
                
                <div className="absolute top-24 left-3/4 transform -translate-x-1/2 bg-blue-100 p-3 rounded-br-xl w-40 text-center">
                  <h5 className="font-semibold text-blue-700">German University of Digital Science</h5>
                </div>
                
                <div className="absolute top-48 left-1/4 transform -translate-x-1/2 bg-blue-100 p-2 rounded-br-xl w-32 text-center">
                  <h5 className="font-semibold text-blue-700 text-sm">Vertical 1</h5>
                </div>
                
                <div className="absolute top-72 left-1/4 transform -translate-x-1/2 bg-blue-100 p-2 rounded-br-xl w-32 text-center">
                  <h5 className="font-semibold text-blue-700 text-sm">Vertical n</h5>
                </div>
                
                <div className="absolute top-0 left-1/4 h-72 w-px bg-orange-300"></div>
                <div className="absolute top-24 left-1/4 w-48 h-px bg-orange-300"></div>
                
                <div className="absolute top-48 left-3/4 w-16 h-px bg-blue-300"></div>
                <div className="absolute top-72 left-3/4 w-16 h-px bg-blue-300"></div>
                
                <div className="absolute top-48 right-16 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    <span>Professors</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    <span>Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;