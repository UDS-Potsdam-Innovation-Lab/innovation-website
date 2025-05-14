import React from 'react';
import Image from 'next/image';
import { ChevronDown, Users, Building2 } from 'lucide-react';

const StructureSection: React.FC = () => {
  const departments = [
    {
      department: "Digital Entrepreneurship College",
      professors: [
        {
          name: "Prof. Dr. Marco Bade",
          img: "/images/financial-support-commercial/marco_bade.jpeg",
          link: "https://german-uds.de/marco_bade"
        }
      ]
    },
    {
      department: "Digital Education and Internet Technologies",
      professors: [
        {
          name: "Prof. Dr. Christoph Meinel",
          img: "/images/financial-support-commercial/meinel.jpeg",
          link: "https://german-uds.de/christoph_meinel"
        },
        {
          name: "Prof. Dr. Thomas Staubitz",
          img: "/images/financial-support-commercial/tom.webp",
          link: "https://german-uds.de/thomas_staubitz"
        },
      ]
    },
    {
      department: "Virtual Education and Digital Reality",
      professors: [
        {
          name: "Prof. Dr. Mike Friedrichsen",
          img: "/images/financial-support-commercial/mike.webp",
          link: "https://german-uds.de/mike_friedrichsen"
        }
      ]
    },
    {
      department: "Multimodal Learning Technologies",
      professors: [
        {
          name: "Prof. Dr. Daniele Di Mitri",
          img: "/images/financial-support-commercial/DiMitri.webp",
          link: "https://german-uds.de/daniele_di_mitri"
        }
      ]
    },
    {
      department: "Artificial Intelligence",
      professors: [
        {
          name: "Prof. Dr. Feiyu Xu",
          img: "/images/financial-support-commercial/Feiyu_Xu.webp",
          link: "https://german-uds.de/feiyu_xu"
        },
        {
          name: "Prof. Dr. Felix Weitkämper",
          img: "/images/financial-support-commercial/Felix.jpeg",
          link: "https://german-uds.de/felix_weitkaemper"
        }
      ]
    },
    {
      department: "Cybersecurity",
      professors: [
        {
          name: "Prof. Dr. Tim Stuchtey",
          img: "/images/financial-support-commercial/TimStuchtey.webp",
          link: "https://german-uds.de/tim_stuchtey"
        }
      ]
    },
    {
      department: "Digital Management and Work",
      professors: [
        {
          name: "Prof. Dr. Georg Loscher",
          img: "/images/financial-support-commercial/Georg.webp",
          link: "https://german-uds.de/georg_loscher"
        }
      ]
    }
  ];

  return (
    <section id="structure" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4">
            Our Unique Approach
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Vertical Participation Structure
          </h2>
          <p className="text-gray-700 text-lg">
            Our vertical structure directly involves professors and research centers in newly founded verticals, 
            transforming university research into marketable digital products and business models.
          </p>
        </div>

        {/* Main Structure */}
        <div className="max-w-6xl mx-auto relative">
          {/* Root Node */}
          <div className="flex justify-center mb-16">
            <div className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg flex items-center space-x-3 relative z-10">
              <Building2 size={24} />
              <span className="text-xl font-bold">German University of Digital Science</span>
            </div>
          </div>

          {/* Connecting Lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <svg className="w-full h-full" style={{ minHeight: '800px' }}>
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                </marker>
              </defs>
              {/* Lines will be added dynamically */}
            </svg>
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {departments.map((dept, index) => (
              <div 
                key={dept.department}
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative"
                style={{
                  marginTop: '2rem',
                  borderTop: '3px solid #3B82F6',
                }}
              >
                {/* Department Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{dept.department}</h3>
                </div>

                {/* Professors */}
                <div className="space-y-4">
                  {dept.professors.map((prof) => (
                    <a
                      key={prof.name}
                      href={prof.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="relative w-12 h-12">
                        <Image
                          src={prof.img}
                          alt={prof.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{prof.name}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Connection Indicator */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <ChevronDown className="text-white" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;