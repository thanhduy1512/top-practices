import React from "react";
import "./Tooltip.css"; // Assuming you have this CSS file for custom styles

interface TooltipProps {
  children: React.ReactNode;
  tooltipText: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText }) => {
  return (
    <div className="relative group ">
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max p-2 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 arrow_box">
        {tooltipText}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
