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
  theme = "dark",
  size = "md",
}: LogoProps) {
  // Color tokens based on user logo image
  const isDark = theme === "dark";
  const navyColor = isDark ? "#FFFFFF" : "#0D2240"; // Primary navy text/symbol (white in dark mode, deep navy in light)
  const navySymbolColor = "#0E2954"; // Navy symbol in logo
  const goldColor = "#C5A059"; // Gold accent color from logo image
  const textNavy = isDark ? "#F8FAFC" : "#0E2954";

  // Size scalers
  const sizeMap = {
    sm: "h-10",
    md: "h-12",
    lg: "h-16 md:h-20",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Symbol Monogram (KP + R + Swooshes) */}
      <svg
        viewBox="0 0 240 180"
        className={`${sizeMap[size]} w-auto drop-shadow-md`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* K Letter (Navy serif) */}
        <path
          d="M 25 30 L 55 30 L 55 125 L 25 125 Z M 48 30 L 48 125 M 55 75 L 110 30 L 140 30 L 78 80 L 142 125 L 110 125 Z"
          fill={isDark ? "#E2E8F0" : navySymbolColor}
        />
        
        {/* P Letter (Overlapped Navy serif) */}
        <path
          d="M 85 30 L 135 30 C 160 30 172 42 172 58 C 172 75 158 88 135 88 L 115 88 L 115 125 L 85 125 Z M 115 52 L 132 52 C 142 52 147 55 147 59 C 147 64 142 67 132 67 L 115 67 Z"
          fill={isDark ? "#CBD5E1" : navySymbolColor}
        />

        {/* R Letter (Luxury Gold serif seamlessly interwoven) */}
        <path
          d="M 130 52 C 150 52 178 50 178 72 C 178 85 168 95 150 98 L 195 140 L 160 140 L 125 98 Z"
          fill={goldColor}
        />
        <path
          d="M 160 98 Q 178 115 200 140 L 170 140 Q 148 115 136 98 Z"
          fill={goldColor}
        />

        {/* Top Swoosh (Navy Curve underneath) */}
        <path
          d="M 45 138 Q 115 170 200 125 Q 125 160 45 138 Z"
          fill={isDark ? "#94A3B8" : navySymbolColor}
        />

        {/* Bottom Swoosh (Gold Curve underneath) */}
        <path
          d="M 58 148 Q 125 180 215 132 Q 135 170 58 148 Z"
          fill={goldColor}
        />
      </svg>

      {/* Text Part (Thai + Divider Line + English) */}
      {variant === "full" && (
        <div className="flex flex-col justify-center leading-none">
          {/* Top Thai text */}
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

          {/* Gold Divider Line with dot accents */}
          <div className="my-[4px] flex items-center gap-1">
            <span
              className="h-[4px] w-[4px] rounded-full shrink-0"
              style={{ backgroundColor: goldColor }}
            />
            <div
              className="h-[1.5px] w-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${goldColor} 0%, ${goldColor}88 50%, ${goldColor} 100%)`,
              }}
            />
            <span
              className="h-[4px] w-[4px] rounded-full shrink-0"
              style={{ backgroundColor: goldColor }}
            />
          </div>

          {/* Bottom English text */}
          <span
            className="font-black tracking-wider uppercase"
            style={{
              color: isDark ? "#E2E8F0" : textNavy,
              fontSize: size === "sm" ? "0.85rem" : size === "md" ? "1.05rem" : "1.45rem",
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
