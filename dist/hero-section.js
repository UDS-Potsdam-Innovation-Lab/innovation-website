import React from 'react';
import { ChevronRight } from 'lucide-react';
const HeroSection = () => {
    return (React.createElement("section", { id: "hero", className: "pt-32 pb-20 px-6 bg-gradient-to-br from-blue-800 to-blue-900 text-white" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("div", { className: "grid lg:grid-cols-2 gap-12 items-center" },
                React.createElement("div", null,
                    React.createElement("h1", { className: "text-4xl lg:text-6xl font-bold leading-tight mb-6" }, "German UDS Innovation GmbH: Digital Innovation Ecosystem"),
                    React.createElement("p", { className: "text-xl mb-8" }, "Our integrated ecosystem connects academic excellence with entrepreneurial practice through strategic investments and services."),
                    React.createElement("div", { className: "flex flex-wrap gap-4" },
                        React.createElement("button", { className: "bg-white text-blue-900 px-8 py-3 rounded-br-xl shadow-lg hover:bg-gray-100 transition-colors flex items-center space-x-2" },
                            React.createElement("span", null, "Explore Investment Options"),
                            React.createElement(ChevronRight, { size: 18 })),
                        React.createElement("button", { className: "bg-transparent border-2 border-white text-white px-8 py-3 rounded-br-xl hover:bg-white hover:text-blue-900 transition-colors" }, "Learn More"))),
                React.createElement("div", { className: "relative" },
                    React.createElement("div", { className: "absolute -top-20 -right-20 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl" }),
                    React.createElement("div", { className: "relative bg-white rounded-br-xl shadow-xl p-8 rotate-3 transform hover:rotate-0 transition-transform" },
                        React.createElement("div", { className: "flex items-center mb-6" },
                            React.createElement("div", { className: "h-12 w-12 bg-orange-500 rounded" }),
                            React.createElement("div", { className: "h-12 w-12 bg-blue-400 rounded ml-1" }),
                            React.createElement("div", { className: "ml-4" },
                                React.createElement("h3", { className: "font-bold" }, "Next-Generation Learning"),
                                React.createElement("p", { className: "text-gray-600 text-sm" }, "Without Borders"))),
                        React.createElement("p", { className: "text-gray-700 mb-6" }, "\"Transforming university research into marketable digital products and business models through our vertical participation structure.\""),
                        React.createElement("div", { className: "flex justify-end" },
                            React.createElement("div", { className: "flex -space-x-2" },
                                React.createElement("div", { className: "w-8 h-8 rounded-full bg-blue-500" }),
                                React.createElement("div", { className: "w-8 h-8 rounded-full bg-green-500" }),
                                React.createElement("div", { className: "w-8 h-8 rounded-full bg-yellow-500" }),
                                React.createElement("div", { className: "w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-xs text-white" }, "+10"))))))),
        React.createElement("div", { className: "absolute bottom-0 left-0 w-full h-20 bg-white", style: { clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' } })));
};
export default HeroSection;
