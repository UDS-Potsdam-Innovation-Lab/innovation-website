import React from "react";
import EnhancedImage from "./enhanced-image";

const InvestNonprofitSection = () => {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-white text-gray-900 space-y-20">
      {/* Overview */}
      <div>
        <h2 className="text-3xl font-bold mb-6">German University of Digital Science: An Overview</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>State recognition by the Brandenburg Ministry of Science, Research, and Culture</li>
          <li>Six accredited Master's/MBA programs and extensive micro-degree offerings</li>
          <li>Virtual classrooms, real-time collaboration, and hands-on project learning</li>
          <li>100% digital, English-medium, location-independent education</li>
          <li>Affordable tuition: €7,500 per year</li>
          <li>A driver of innovation and competitiveness for Germany's digital economy</li>
        </ul>
      </div>

      {/* Study Programs Image */}
      <div className="flex justify-center">
        <EnhancedImage
          src="/images/financial-support-non-profit/study_program.png"
          alt="Study Program Overview"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* Market & Media */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Brochure */}
        <a
          href="https://german-uds.de/cta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="font-bold text-lg mb-2 text-center">Brochure</div>
          <EnhancedImage
            src="/images/financial-support-non-profit/brochure.png"
            alt="Brochure"
            width={300}
            height={200}
            className="rounded-md"
          />
        </a>
        {/* Scientific Reports */}
        <a
          href="https://german-uds.de/scientific-reports"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="font-bold text-lg mb-2 text-center">Scientific Reports</div>
          <EnhancedImage
            src="/images/financial-support-non-profit/sci_report.png"
            alt="Scientific Report"
            width={300}
            height={200}
            className="rounded-md"
          />
        </a>
        {/* Podcasts */}
        <a
          href="https://german-uds.de/podcasts"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div className="font-bold text-lg mb-2 text-center">Podcasts</div>
          <EnhancedImage
            src="/images/financial-support-non-profit/podcast.png"
            alt="Podcast"
            width={300}
            height={200}
            className="rounded-md"
          />
        </a>
      </div>
    </section>
  );
};

export default InvestNonprofitSection;
