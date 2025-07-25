import React from "react";
import { useLocale } from "../contexts/LocaleContext";
import { ArrowRight } from "lucide-react";

const InvestNonprofitSection: React.FC = () => {
  const { t, tObject, locale } = useLocale();
  const condensedPoints = tObject("investNonprofit.overview.pointsCondensed") as string[];

  const mediaLinks = [
    {
      label: t("investNonprofit.media.brochure"),
      description: t("investNonprofit.media.brochureDesc"),
      href: "https://german-uds.de/cta",
    },
    {
      label: t("investNonprofit.media.reports"),
      description: t("investNonprofit.media.reportsDesc"),
      href: "https://german-uds.de/scientific-reports",
    },
    {
      label: t("investNonprofit.media.podcasts"),
      description: t("investNonprofit.media.podcastsDesc"),
      href: "https://german-uds.de/podcasts",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-[#0a2342]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t("investNonprofit.overview.title")}{" "}
            <span className="text-orange-500">{t("investNonprofit.overview.orange")}</span>
          </h2>
        </div>

        {/* Condensed Points */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-700 text-base">
          {Array.isArray(condensedPoints) &&
            condensedPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-orange-50 border border-orange-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                {point}
              </div>
            ))}
        </div>

        {/* Website Link */}
        <div className="flex justify-center">
          <a
            href="https://german-uds.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-4 max-w-3xl w-full bg-orange-100 border border-orange-200 rounded-2xl shadow-md px-6 py-6 hover:shadow-lg transition"
          >
            <div className="text-left">
              <h3 className="text-xl font-bold text-orange-600 mb-1">
                {t("investNonprofit.websiteLink.title")}
              </h3>
              <p className="text-gray-700 text-sm">
                {t("investNonprofit.websiteLink.description")}
              </p>
            </div>
            <div className="text-orange-600 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={24} />
            </div>
          </a>
        </div>

        {/* Media Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between h-full bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition group"
            >
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-orange-600 mb-2">{item.label}</h4>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
              <div className="text-right text-orange-500 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestNonprofitSection;
