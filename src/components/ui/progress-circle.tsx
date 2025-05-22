
import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressCircleProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
  backgroundColor?: string;
  label?: React.ReactNode;
  sublabel?: React.ReactNode;
}

export function ProgressCircle({
  value,
  max,
  size = 120,
  strokeWidth = 10,
  className,
  color = "#6366f1",
  backgroundColor = "#e5e7eb",
  label,
  sublabel,
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / max) * circumference;
  
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={backgroundColor}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          stroke={color}
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        {label && (
          <div className="text-3xl font-bold">{label}</div>
        )}
        {sublabel && (
          <div className="text-sm text-gray-500">{sublabel}</div>
        )}
      </div>
    </div>
  );
}
