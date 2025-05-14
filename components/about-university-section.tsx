import React from "react";
import EnhancedImage from "./enhanced-image";

const AboutUniversitySection = () => {
  return (
    <section id="about-university" className="px-6 py-12 md:px-16 lg:px-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Empowering Global Talents</h2>
              <p>
                The German UDS is dedicated to empowering individuals to achieve their full potential by
                providing access to world-class education and resources.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">World-Class University Degrees</h2>
              <p>
                The German UDS offers high-quality, digitally innovative degrees that are recognized
                globally and provide graduates with a competitive advantage.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Efficient Lifelong Learning</h2>
              <p>
                The university offers flexible and accessible learning formats that cater to the evolving
                needs of individuals throughout their careers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Micro Degree Programs</h2>
              <p>
                A range of micro-degree programs designed to meet the specific needs of individuals seeking
                specialization in areas of digitalization.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <EnhancedImage
              src="/images/university-pitch/avatar.png"
              alt="AI-supported Avatar"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Higher Education Transformation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center order-last md:order-first">
            <EnhancedImage
              src="/images/university-pitch/higher_education_model.png"
              alt="Higher Education Transformation Model"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Transforming Higher Education</h2>
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>Higher education lags behind other industries in technological adoption.</li>
              <li>Online education market is projected to reach $1 trillion by 2027.</li>
              <li>Synchronous and asynchronous learning formats are increasingly preferred.</li>
              <li>Personalized, competency-based learning is essential for future readiness.</li>
            </ul>
          </div>
        </div>

        {/* Learning Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Learning Ecosystem</h2>
            <p className="mb-4">
              The German UDS supports diverse learners through formal and informal formats, including
              online, blended, and in-person options — all aligned with the Common Micro Credential Framework.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Compatible with the European MOOC Consortium (EMC-CMF)</li>
              <li>Designed for lifelong learners and professionals</li>
              <li>Supports modular micro-credentials across disciplines</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <EnhancedImage
              src="/images/university-pitch/learning_ecosystem.png"
              alt="Learning Ecosystem Diagram"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Student Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center order-last md:order-first">
            <EnhancedImage
              src="/images/university-pitch/user_journey.png"
              alt="German UDS User Journey"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Student Journey with UDS</h2>
            <p>
              From initial contact to campus management and evaluation, German UDS streamlines digital
              learning through LMS, LTI integration, proctoring, and modular degrees.
            </p>
          </div>
        </div>

        {/* CloudHouse Innovation Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The CloudHouse: Our Innovation Hub</h2>
            <p className="mb-4">
              Located in Media City Babelsberg, CloudHouse is a high-tech campus featuring labs, a
              data center, and state-of-the-art event spaces designed for collaboration and hybrid
              learning.
            </p>
            <p>
              It represents our commitment to creating an ecosystem that fosters innovation, community,
              and next-generation education.
            </p>
          </div>
          <div className="flex justify-center">
            <EnhancedImage
              src="/images/university-pitch/cloudhouse_opening.png"
              alt="CloudHouse Opening"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversitySection;
