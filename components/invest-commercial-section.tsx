import React from "react";
import ResponsiveImage from "./responsive-image";

const InvestCommercialSection = () => {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-gray-50 text-gray-900 space-y-20">
      {/* Investment Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Investment Portfolio</h2>
          <p className="mb-2">German UDS Innovation GmbH</p>
          <ul className="list-disc list-inside space-y-2">
            <li>100% stake in German UDS Service GmbH – responsible for the IT infrastructure for the university and external partners</li>
            <li>20% stake in FB Cloudhouse GmbH – handles administrative tasks and space rental</li>
            <li>20% participation in German UDS gGmbH – guarantees creative involvement in the university</li>
          </ul>
        </div>
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
      </div>

      {/* USP Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Vertical Participation USP</h2>
          <p>
            Our vertical structure directly involves professors and research centers in newly founded verticals.
            This transforms university research into marketable digital products and business models.
          </p>
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

      {/* Key People */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Key People in the Ecosystem</h2>
        <p className="mb-4">
          These professors and experts lead verticals and research initiatives at German UDS, bridging academia with digital innovation.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ResponsiveImage src="/images/financial-support-commercial/mike.webp" alt="Prof. Dr. Mike Friedrichsen" width={200} height={200} className="rounded-full shadow" sizes="(max-width: 768px) 50vw, 200px" />
          <ResponsiveImage src="/images/financial-support-commercial/tom.webp" alt="Prof. Dr. Thomas Staubitz" width={200} height={200} className="rounded-full shadow" sizes="(max-width: 768px) 50vw, 200px" />
          <ResponsiveImage src="/images/financial-support-commercial/DiMitri.webp" alt="Prof. Dr. Daniele Di Mitri" width={200} height={200} className="rounded-full shadow" sizes="(max-width: 768px) 50vw, 200px" />
          <ResponsiveImage src="/images/financial-support-commercial/Feiyu_Xu.webp" alt="Prof. Dr. Feiyu Xu" width={200} height={200} className="rounded-full shadow" sizes="(max-width: 768px) 50vw, 200px" />
          <ResponsiveImage src="/images/financial-support-commercial/Felix.jpeg" alt="Prof. Dr. Felix Weitkämper" width={200} height={200} className="rounded-full shadow" sizes="(max-width: 768px) 50vw, 200px" />
          <ResponsiveImage src="/images/financial-support-commercial/TimStuchtey.webp" alt="Prof. Dr. Tim Stuchtey" width={200} height={200} className="rounded-full shadow" sizes="(max-width: 768px) 50vw, 200px" />
          <ResponsiveImage src="/images/financial-support-commercial/Georg.webp" alt="Prof. Dr. Georg Loscher" width={200} height={200} className="rounded-full shadow" sizes="(max-width: 768px) 50vw, 200px" />
          <ResponsiveImage src="/images/financial-support-commercial/marco_bade.jpeg" alt="Prof. Dr. Marco Bade" width={200} height={200} className="rounded-full shadow" sizes="(max-width: 768px) 50vw, 200px" />
        </div>
      </div>
    </section>
  );
};

export default InvestCommercialSection;
