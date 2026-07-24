import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  accentTop?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  accentTop = false,
}: GlassCardProps) {
  return (
    <div
      className={`executive-card rounded-2xl p-6 sm:p-8 ${
        accentTop ? "executive-card-accent" : ""
      } ${hoverEffect ? "" : "transform-none shadow-sm hover:transform-none"} ${className}`}
    >
      {children}
    </div>
  );
}
