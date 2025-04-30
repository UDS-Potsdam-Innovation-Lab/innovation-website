import React from 'react';
const ScrollProgress = ({ progress }) => {
    return (React.createElement("div", { className: "fixed top-0 left-0 w-full h-1 z-50" },
        React.createElement("div", { className: "h-full bg-orange-500", style: { width: `${progress}%` } })));
};
export default ScrollProgress;
