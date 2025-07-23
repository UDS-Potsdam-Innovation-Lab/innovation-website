import React from "react";
import EnhancedImage from "./enhanced-image";
import { useLocale } from "../contexts/LocaleContext";

const AboutUniversitySection = () => {
  const { t, tObject } = useLocale();

  const transformingPoints = tObject("university.transforming.points") as string[];
  const ecosystemPoints = tObject("university.ecosystem.points") as string[];

  return (
    <section
      id="about-university"
      className="scroll-mt-28 pt-28 px-6 py-20 md:px-16 lg:px-24 bg-white text-gray-900"
    >
      <div className="max-w-6xl mx-auto space-y-24">
        {/* ===== Section Header ===== */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2342] tracking-tight break-words">
            <span className="text-orange-500">{t("university.headline.title").split(",")[0]}</span>,{" "}
            {t("university.headline.title").split(",")[1]}
          </h2>
          <p className="break-words">{String(t("university.headline.description"))}</p>
        </div>

        {/* ===== Feature Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: String(t("university.empowering.title")),
              description: String(t("university.empowering.description")),
            },
            {
              title: String(t("university.degrees.title")),
              description: String(t("university.degrees.description")),
            },
            {
              title: String(t("university.learning.title")),
              description: String(t("university.learning.description")),
            },
            {
              title: String(t("university.micro.title")),
              description: String(t("university.micro.description")),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-orange-50 hover:shadow-orange-400/50 hover:shadow-xl rounded-2xl transition-all duration-300 shadow-md p-6 sm:p-8 flex flex-col justify-between border border-orange-100"
            >
              <h3 className="text-xl font-bold mb-3 text-[#0a2342]">{item.title}</h3>
              <p className="text-gray-700 text-sm break-words whitespace-normal">{item.description}</p>
            </div>
          ))}
        </div>

        {/* ===== Transforming Higher Education ===== */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl ring-2 ring-orange-200 max-w-6xl mx-auto bg-cover bg-center"
          style={{
            backgroundImage: "url('/transforming-higher-education.png')",
            boxShadow: "0 0 30px rgba(255, 140, 0, 0.25)"
          }}
        >
          <div className="bg-white/50 backdrop-blur-sm px-8 py-16 text-center">
            <h3 className="text-3xl font-extrabold text-[#0a2342] mb-10">
              {String(t("university.transforming.title"))}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {transformingPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 text-sm text-[#0a2342] border border-orange-100 rounded-xl p-5 shadow-md hover:shadow-orange-200 transition-all duration-300 text-left break-words"
                >
                  <span className="font-medium leading-snug">
                    {point.includes("$1T") ? (
                      <>
                        {point.split("$1T")[0]}
                        <span className="text-orange-600 font-semibold">$1T</span>
                        {point.split("$1T")[1]}
                      </>
                    ) : (
                      point
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Learning Ecosystem Section ===== */}
        <div className="relative bg-white/60 backdrop-blur-lg border border-[#0a2342]/20 shadow-xl shadow-[#0a2342]/30 rounded-2xl p-10">
          <h3 className="text-3xl font-extrabold text-[#0a2342] mb-4">
            {String(t("university.ecosystem.title"))}
          </h3>
          <p className="text-base text-[#333] mb-6 max-w-2xl leading-relaxed">
            <span className="text-orange-600 font-medium">
              {String(t("university.ecosystem.description"))}
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {ecosystemPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white/90 border border-[#0a2342]/20 text-sm text-[#0a2342] rounded-xl p-5 shadow-md hover:shadow-orange-200 hover:border-orange-300 transition-all duration-300 text-center break-words"
              >
                <span className="font-semibold leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Learning Ecosystem Banner Image ===== */}
        <div className="w-full mt-8 rounded-2xl overflow-hidden">
          <img
            src="/learning-ecosystem.png"
            alt="Learning Ecosystem Banner"
            className="w-full h-48 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUniversitySection;
