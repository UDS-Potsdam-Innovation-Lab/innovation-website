import React from "react";
import Image from "next/image";

const FoundationSection = () => {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 bg-gray-100 text-gray-900 space-y-20">
      {/* Why the Foundation Exists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why the German UDS Foundation Exists</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Promotes and finances German University of Digital Science</li>
            <li>Shapes digital civil society</li>
            <li>Integrates digital science into research and society</li>
            <li>Pioneers innovative digitalization strategies</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/foundation-pitch/why_foundation.png"
            alt="Foundation Purpose"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Guiding Principles */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Guiding Principles</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Shape the digital future</li>
          <li>Establish Digital Science as an innovative research approach</li>
          <li>Promote young talent in digital fields</li>
          <li>Support development of future-oriented educational skills</li>
        </ul>
      </div>

      {/* Core Beliefs Image */}
      <div className="flex justify-center">
        <Image
          src="/images/foundation-pitch/core_belief.png"
          alt="Core Beliefs"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* Foundation Purpose */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Purpose of the Foundation</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Support German UDS in development and operation</li>
          <li>Promote global cooperation in education and research</li>
          <li>Fund visionary projects like the Virtual Campus</li>
          <li>Boost open digital platforms like German-UDS.Academy</li>
        </ul>
      </div>

      {/* How to Support */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/foundation-pitch/support_us.png"
            alt="Support Methods"
            width={500}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">How You Can Support Us</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Donations</li>
            <li>Endowments</li>
            <li>Contributions</li>
            <li>Project-specific funding (with tax benefits)</li>
          </ul>
        </div>
      </div>

      {/* Foundation Leadership */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Foundation Leadership</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Image src="/images/foundation-pitch/mike_f.jpg" alt="Prof. Dr. Mike Friedrichsen" width={200} height={200} className="rounded-full shadow" />
          <Image src="/images/foundation-pitch/ch_m.jpg" alt="Prof. Dr. Christoph Meinel" width={200} height={200} className="rounded-full shadow" />
          <Image src="/images/foundation-pitch/wulf_w.jpg" alt="Wulf Wersig" width={200} height={200} className="rounded-full shadow" />
          <Image src="/images/foundation-pitch/syster_f.jpg" alt="Syster Friedrichsen" width={200} height={200} className="rounded-full shadow" />
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
