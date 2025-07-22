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

  const getDepartmentKey = (department: string) => {
    const map: Record<string, string> = {
      "Digital Entrepreneurship College": "entrepreneurship",
      "Digital Education and Internet Technologies": "education",
      "Virtual Education and Digital Reality": "virtual",
      "Multimodal Learning Technologies": "multimodal",
      "Artificial Intelligence": "ai",
      "Cybersecurity": "security",
      "Digital Management and Work": "management"
    };
    return map[department] || "";
  };

  const departments: Department[] = [
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
    }
  ];

  const singleProfDepartments = departments.filter(d => d.professors.length === 1);
  const multiProfDepartments = departments.filter(d => d.professors.length > 1);

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

        {/* First Row: 3 single-professor departments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {singleProfDepartments.slice(0, 3).map((dept) => {
            const departmentKey = getDepartmentKey(dept.department);
            const translationKey = departmentKey ? `structure.departments.${departmentKey}` : '';

            return (
              <DepartmentCard key={dept.department} dept={dept} translationKey={translationKey} />
            );
          })}
        </div>

        {/* Second Row: 2 single-professor departments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {singleProfDepartments.slice(3).map((dept) => {
            const departmentKey = getDepartmentKey(dept.department);
            const translationKey = departmentKey ? `structure.departments.${departmentKey}` : '';

            return (
              <DepartmentCard key={dept.department} dept={dept} translationKey={translationKey} />
            );
          })}
        </div>

        {/* Third Row: 2 multi-professor departments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {multiProfDepartments.map((dept) => {
            const departmentKey = getDepartmentKey(dept.department);
            const translationKey = departmentKey ? `structure.departments.${departmentKey}` : '';

            return (
              <div
                key={dept.department}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {translationKey ? String(t(translationKey)) : dept.department}
                  </h3>
                </div>

                <div className="space-y-3">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
const DepartmentCard = ({
  dept,
  translationKey,
}: {
  dept: Department;
  translationKey: string;
}) => (
  <div
    className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg"
  >
    <div className="flex items-center space-x-3 mb-4">
      <div className="bg-blue-100 p-2 rounded-lg">
        <Users className="text-blue-600" size={20} />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">
        {translationKey ? String(useLocale().t(translationKey)) : dept.department}
      </h3>
    </div>

    <div className="flex-1 flex items-center">
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
