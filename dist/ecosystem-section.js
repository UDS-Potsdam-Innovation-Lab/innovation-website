import React from 'react';
import { ChevronRight } from 'lucide-react';
const EcosystemSection = () => {
    return (React.createElement("section", { id: "ecosystem", className: "py-20 px-6" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("div", { className: "grid lg:grid-cols-2 gap-16 items-center" },
                React.createElement("div", { className: "order-2 lg:order-1" },
                    React.createElement("img", { src: "/api/placeholder/600/400", alt: "Digital Innovation Ecosystem", className: "rounded-br-xl shadow-lg transform hover:scale-105 transition-transform duration-500" })),
                React.createElement("div", { className: "order-1 lg:order-2" },
                    React.createElement("div", { className: "inline-block px-4 py-1 bg-orange-100 text-orange-500 rounded-br-xl text-sm font-medium mb-4" }, "Our Digital Innovation Ecosystem"),
                    React.createElement("h2", { className: "text-3xl lg:text-4xl font-bold mb-6" }, "Connecting Academic Excellence with Entrepreneurial Practice"),
                    React.createElement("div", { className: "mb-8" },
                        React.createElement("h3", { className: "text-xl font-semibold text-orange-500 mb-3" }, "Purpose"),
                        React.createElement("p", { className: "text-gray-700 mb-4" }, "As a catalyst, German UDS Innovation GmbH promotes sustainable technology transfer between science and industry and achieves attractive returns on investment. Our integrated ecosystem connects academic excellence with entrepreneurial practice.")),
                    React.createElement("div", null,
                        React.createElement("h3", { className: "text-xl font-semibold text-orange-500 mb-3" }, "Vision"),
                        React.createElement("p", { className: "text-gray-700 mb-4" }, "Establish a successful investment company in digital innovations. Act as a catalyst for technology transfer between science and industry.")),
                    React.createElement("div", { className: "mt-8" },
                        React.createElement("button", { className: "bg-orange-500 text-white px-6 py-3 rounded-br-xl shadow-md hover:bg-orange-600 transition-colors flex items-center space-x-2" },
                            React.createElement("span", null, "Learn About Our Strategy"),
                            React.createElement(ChevronRight, { size: 18 }))))))));
};
export default EcosystemSection;
