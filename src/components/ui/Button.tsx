import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "gold",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50";

  const variants = {
    gold: "bg-gold-gradient text-slate-950 font-bold shadow-lg shadow-amber-950/20 hover:bg-gold-gradient-hover hover:scale-[1.02] hover:shadow-amber-500/20 active:scale-[0.98]",
    outline:
      "border border-[#C5A059]/50 text-[#C5A059] bg-slate-900/40 backdrop-blur-sm hover:bg-[#C5A059]/10 hover:border-[#C5A059] hover:text-amber-300 hover:scale-[1.02] active:scale-[0.98]",
    ghost: "text-slate-300 hover:text-[#C5A059] hover:bg-slate-800/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
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
