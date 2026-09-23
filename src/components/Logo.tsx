import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon-only" | "stacked";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  theme = "light",
  size = "md",
}: LogoProps) {
  const isDark = theme === "dark";
  const logoSrc = isDark ? "/images/logo-white.png" : "/images/logo.png";

  const heightClasses = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-12 md:h-14",
    lg: "h-14 md:h-18 lg:h-20",
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="บริษัท เคพีอาร์ แอคเคานต์ติ้ง จำกัด - KPR ACCOUNTING CO.,LTD."
        width={1024}
        height={431}
        className={`${heightClasses[size]} w-auto object-contain`}
        priority
      />
    </div>
  );
}
