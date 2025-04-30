import React from 'react';
import { ChevronRight } from 'lucide-react';
const Navigation = ({ activeSection }) => {
    return (React.createElement("nav", { className: "fixed top-0 left-0 w-full bg-white bg-opacity-95 z-40 shadow-sm" },
        React.createElement("div", { className: "container mx-auto px-6 py-4 flex items-center justify-between" },
            React.createElement("div", { className: "flex items-center space-x-4" },
                React.createElement("div", { className: "flex items-center" },
                    React.createElement("div", { className: "h-10 w-10 bg-orange-500 rounded" }),
                    React.createElement("div", { className: "h-10 w-10 bg-blue-400 rounded ml-1" })),
                React.createElement("div", null,
                    React.createElement("h1", { className: "text-lg font-bold text-gray-900" }, "German University"),
                    React.createElement("h2", { className: "text-sm font-bold text-gray-900" },
                        "of Digital Science ",
                        React.createElement("span", { className: "text-orange-500" }, "Innovation")))),
            React.createElement("div", { className: "hidden lg:flex space-x-8" },
                React.createElement("a", { href: "#ecosystem", className: `text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'ecosystem' ? 'text-orange-500' : ''}` }, "Ecosystem"),
                React.createElement("a", { href: "#portfolio", className: `text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'portfolio' ? 'text-orange-500' : ''}` }, "Portfolio"),
                React.createElement("a", { href: "#structure", className: `text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'structure' ? 'text-orange-500' : ''}` }, "Structure"),
                React.createElement("a", { href: "#business", className: `text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'business' ? 'text-orange-500' : ''}` }, "Business Model"),
                React.createElement("a", { href: "#invest", className: `text-sm font-medium hover:text-orange-500 transition-colors ${activeSection === 'invest' ? 'text-orange-500' : ''}` }, "Invest")),
            React.createElement("div", null,
                React.createElement("button", { className: "bg-orange-500 text-white px-6 py-2 rounded-br-xl shadow-md hover:bg-orange-600 transition-colors flex items-center space-x-2" },
                    React.createElement("span", null, "Investment Opportunities"),
                    React.createElement(ChevronRight, { size: 16 }))))));
};
export default Navigation;
