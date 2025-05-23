import React from "react";

interface ArrowCurveProps {
  className?: string;
  style?: React.CSSProperties;
}

const ArrowCurve: React.FC<ArrowCurveProps> = ({ className = "", style = {} }) => (
  <svg
    className={className}
    style={style}
    width="120"
    height="80"
    viewBox="0 0 120 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 70 C 30 10, 90 10, 110 70"
      stroke="#2563eb"
      strokeWidth={2}
      strokeDasharray="7 7"
      fill="none"
      markerEnd="url(#arrowhead)"
    />
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="10"
        refX="7"
        refY="5"
        orient="auto"
      >
        <polygon points="0 0, 10 5, 0 10" fill="#2563eb" />
      </marker>
    </defs>
  </svg>
);

export default ArrowCurve;
