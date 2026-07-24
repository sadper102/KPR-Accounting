import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "navy" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "navy",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400";

  const variants = {
    navy: "bg-[#0D2240] text-white hover:bg-[#16325B] shadow-md shadow-slate-900/10 hover:shadow-lg active:scale-[0.99]",
    gold: "bg-gold-gradient text-slate-950 font-semibold hover:opacity-95 shadow-md shadow-amber-900/10 active:scale-[0.99]",
    outline:
      "border border-slate-300 text-[#0D2240] bg-white hover:bg-slate-50 hover:border-[#0D2240] active:scale-[0.99]",
    ghost: "text-slate-600 hover:text-[#0D2240] hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs sm:text-sm font-semibold",
    md: "px-5 py-2.5 text-sm font-semibold",
    lg: "px-7 py-3.5 text-base font-bold",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
