import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon-only" | "stacked";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({
  className = "",
  theme = "light",
  size = "md",
}: LogoProps) {
  const isDark = theme === "dark";
  const logoSrc = isDark ? "/images/logo-white.png" : "/images/logo.png";

  const heightClasses = {
    sm: "h-10 sm:h-11",
    md: "h-12 sm:h-14 lg:h-16",
    lg: "h-14 sm:h-16 lg:h-20",
    xl: "h-20 sm:h-24 lg:h-28",
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="บริษัท เคพีอาร์ แอคเคาน์ติ้ง จำกัด - KPR ACCOUNTING CO.,LTD."
        width={924}
        height={194}
        className={`${heightClasses[size]} w-auto object-contain`}
        priority
      />
    </div>
  );
}
