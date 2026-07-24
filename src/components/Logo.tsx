import React from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon-only" | "stacked";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "full",
  theme = "light",
  size = "md",
}: LogoProps) {
  const isDark = theme === "dark";
  const navySymbolColor = isDark ? "#FFFFFF" : "#0D2240"; // Primary navy text/symbol
  const goldColor = "#C5A059"; // Luxury gold
  const textNavy = isDark ? "#FFFFFF" : "#0D2240";

  const sizeMap = {
    sm: "h-9",
    md: "h-11 sm:h-12",
    lg: "h-14 md:h-18",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Symbol Monogram */}
      <svg
        viewBox="0 0 320 220"
        className={`${sizeMap[size]} w-auto shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`goldGrad_${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9A7B39" />
          </linearGradient>
        </defs>

        {/* --- K LETTER --- */}
        <path
          d="M 30 40 L 80 40 L 80 52 L 62 52 L 62 148 L 80 148 L 80 160 L 30 160 L 30 148 L 48 148 L 48 52 L 30 52 Z"
          fill={navySymbolColor}
        />
        <path
          d="M 55 105 L 105 52 L 85 52 L 48 95 Z"
          fill={navySymbolColor}
        />
        <path
          d="M 75 88 L 128 148 L 148 148 L 148 136 L 132 136 L 90 88 Z"
          fill={navySymbolColor}
        />

        {/* --- P LETTER --- */}
        <path
          d="M 95 40 L 145 40 L 145 52 L 128 52 L 128 148 L 145 148 L 145 160 L 95 160 L 95 148 L 112 148 L 112 52 L 95 52 Z"
          fill={navySymbolColor}
        />
        <path
          d="M 128 52 L 175 52 C 205 52 220 66 220 85 C 220 105 200 118 170 118 L 128 118 Z M 128 66 L 128 104 L 165 104 C 188 104 198 96 198 85 C 198 73 186 66 165 66 Z"
          fill={navySymbolColor}
        />

        {/* --- R LETTER --- */}
        <path
          d="M 160 52 L 205 52 C 235 52 250 68 250 88 C 250 108 232 122 205 124 C 218 132 232 145 258 170 L 235 170 C 212 148 198 134 182 124 L 160 124 Z M 160 66 L 160 110 L 195 110 C 218 110 228 100 228 88 C 228 75 215 66 195 66 Z"
          fill={`url(#goldGrad_${theme})`}
        />
        <path
          d="M 188 118 Q 215 130 250 162 C 265 176 278 182 295 182 L 295 170 C 275 170 258 160 238 142 Q 212 118 188 118 Z"
          fill={`url(#goldGrad_${theme})`}
        />

        {/* --- DYNAMIC SWOOSHES --- */}
        <path
          d="M 60 172 Q 150 215 260 152 Q 165 200 60 172 Z"
          fill={navySymbolColor}
        />
        <path
          d="M 75 185 Q 165 228 280 160 Q 178 212 75 185 Z"
          fill={`url(#goldGrad_${theme})`}
        />
      </svg>

      {/* Text Part */}
      {variant === "full" && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className="font-bold tracking-tight"
            style={{
              color: textNavy,
              fontSize: size === "sm" ? "1.05rem" : size === "md" ? "1.25rem" : "1.75rem",
              fontFamily: "'Noto Sans Thai', 'Sarabun', sans-serif",
            }}
          >
            เคพีอาร์ แอคเคาท์ติ้ง
          </span>

          <div className="my-[4px] flex items-center gap-1">
            <span
              className="h-[3.5px] w-[3.5px] rounded-full shrink-0"
              style={{ backgroundColor: goldColor }}
            />
            <div
              className="h-[1.5px] w-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${goldColor} 0%, ${goldColor}AA 50%, ${goldColor} 100%)`,
              }}
            />
            <span
              className="h-[3.5px] w-[3.5px] rounded-full shrink-0"
              style={{ backgroundColor: goldColor }}
            />
          </div>

          <span
            className="font-black tracking-wider uppercase"
            style={{
              color: isDark ? "#E2E8F0" : textNavy,
              fontSize: size === "sm" ? "0.8rem" : size === "md" ? "1.02rem" : "1.45rem",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            KPR ACCOUNTING
          </span>
        </div>
      )}
    </div>
  );
}
