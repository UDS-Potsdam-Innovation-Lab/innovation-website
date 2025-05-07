import React from "react";
import Image from "next/image";

const InvestNonprofitSection = () => {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-white text-gray-900 space-y-20">
      {/* Overview */}
      <div>
        <h2 className="text-3xl font-bold mb-6">German University of Digital Science: An Overview</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>State recognition by the Brandenburg Ministry of Science, Research, and Culture</li>
          <li>Six accredited Master’s/MBA programs and extensive micro-degree offerings</li>
          <li>Virtual classrooms, real-time collaboration, and hands-on project learning</li>
          <li>100% digital, English-medium, location-independent education</li>
          <li>Affordable tuition: €7,500 per year</li>
          <li>A driver of innovation and competitiveness for Germany’s digital economy</li>
        </ul>
      </div>

      {/* Study Programs Image */}
      <div className="flex justify-center">
        <Image
          src="/images/financial-support-non-profit/study_program.png"
          alt="Study Program Overview"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* Innovation & Ecosystem */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Foundation Role in Driving Innovation</h2>
        <p className="mb-4">
          The German UDS Foundation is a public-benefit organization. Donations directly fund research, professorships,
          scholarships, and the digital infrastructure for open global education.
        </p>
        <p>
          German UDS gGmbH is the nonprofit operator responsible for budgets, contracts, staffing, and administration
          of the university.
        </p>
      </div>

      {/* Shareholding Structure */}
      <div className="flex justify-center">
        <Image
          src="/images/financial-support-non-profit/shareholding_structures.png"
          alt="Shareholding Structures"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* Nonprofit Participation Models */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Ways to Support</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Donations or contributions to the German UDS Foundation</li>
          <li>Scholarship sponsorships for deserving students</li>
          <li>Capital acquisition (min. 1%, max. 5% per party)</li>
          <li>Operational support for digital learning and infrastructure</li>
        </ul>
      </div>

      {/* Market & Media */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <Image
          src="/images/financial-support-non-profit/brochure.png"
          alt="Brochure"
          width={300}
          height={200}
          className="rounded-md"
        />
        <Image
          src="/images/financial-support-non-profit/sci_report.png"
          alt="Scientific Report"
          width={300}
          height={200}
          className="rounded-md"
        />
        <Image
          src="/images/financial-support-non-profit/podcast.png"
          alt="Podcast"
          width={300}
          height={200}
          className="rounded-md"
        />
      </div>
    </section>
  );
};

export default InvestNonprofitSection;
