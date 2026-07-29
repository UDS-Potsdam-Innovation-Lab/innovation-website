import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

type Professor = {
  name: string;
  img: string;
  link: string;
};

type Department = {
  department: string;
  professors: Professor[];
};

const StructureSection: React.FC = () => {
  const { t } = useLocale();

  const row1: Department[] = [
    {
      department: "AI and Quantum Computing",
      professors: [
        {
          name: "Prof. Dr. Frank Leymann",
          img: "/Frank Leymann.png",
          link: "https://german-uds.de/frank_leymann"
        }
      ]
    }
  ];

  const row2: Department[] = [
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
    }
  ];

  const row3: Department[] = [
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
        }
      ]
    }
  ];

  const renderDepartmentRow = (departments: Department[], columns: 1 | 2 | 3, isLast = false) => {
    const gridClass =
      columns === 1
        ? "grid grid-cols-1 max-w-md mx-auto"
        : columns === 2
          ? "grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto";

    return (
      <div className={`${gridClass} gap-6 ${isLast ? "" : "mb-12"}`}>
        {departments.map((dept) => (
            <DepartmentCard key={dept.department} dept={dept} />
          ))}
      </div>
    );
  };

  return (
    <section id="structure" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            {t("structure.title.part1")}{" "}
            <span className="text-orange-500">{t("structure.title.part2")}</span>
          </h2>
          <div className="inline-block mt-4 bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            {t("structure.subtitle")}
          </div>

          <p className="text-gray-700 text-lg mt-6 mb-6">
            {String(t('structure.description'))}
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-12 rounded-full" />
        </div>

        {/* Root Node */}
        <div className="flex justify-center mb-16">
          <div className="border border-[#0a2342] text-[#0a2342] px-8 py-4 rounded-xl shadow-sm flex items-center space-x-3">
            <Image
              src="/images/favicon.png"
              alt="German UDS Logo"
              width={24}
              height={24}
            />
            <span className="text-xl font-bold">German University of Digital Science</span>
          </div>
        </div>

        {renderDepartmentRow(row1, 1)}
        {renderDepartmentRow(row2, 3)}
        {renderDepartmentRow(row3, 3, true)}
      </div>
    </section>
  );
};

// Reusable Card Component
const DepartmentCard = ({
  dept,
}: {
  dept: Department;
}) => (
  <div
    className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg"
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className="bg-blue-100 p-2 rounded-lg">
        <Users className="text-blue-600" size={20} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">
        {dept.department}
      </h3>
    </div>

    <div className={`flex-1 ${dept.professors.length > 1 ? "space-y-3" : "flex items-center"}`}>
      <div className="w-full">
        {dept.professors.map((prof) => (
          <a
            key={prof.name}
            href={prof.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-md transition"
          >
            <div className="relative w-20 h-20">
              <Image
                src={prof.img}
                alt={prof.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-sm font-medium text-gray-900">{prof.name}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default StructureSection;
