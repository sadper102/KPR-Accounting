import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-panel rounded-2xl p-6 sm:p-8 ${
        hoverEffect ? "glass-panel-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
