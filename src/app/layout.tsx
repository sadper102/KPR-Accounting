import type { Metadata } from "next";
import { Playfair_Display, Prompt, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} (${SITE_CONFIG.thaiName}) | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "KPR ACCOUNTING",
    "เคพีอาร์ แอคเคาท์ติ้ง",
    "สำนักงานบัญชี",
    "สำนักงานกฎหมาย",
    "รับทำบัญชี",
    "วางแผนภาษี",
    "จดทะเบียนบริษัท",
    "ตรวจสอบบัญชี",
    "ที่ปรึกษากฎหมาย",
    "ทนายความ",
    "ทำบัญชี สาทร กรุงเทพ",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: `${SITE_CONFIG.name} | สำนักงานบัญชีและกฎหมายครบวงจร`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - สำนักงานบัญชีและกฎหมาย`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LegalService"],
    "name": SITE_CONFIG.name,
    "alternateName": SITE_CONFIG.thaiName,
    "description": SITE_CONFIG.description,
    "url": SITE_CONFIG.url,
    "telephone": SITE_CONFIG.phone,
    "email": SITE_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123/45 อาคารเคพีอาร์ ทาวเวอร์ ชั้น 12 ถนนสาทรใต้",
      "addressLocality": "เขตสาทร",
      "addressRegion": "กรุงเทพมหานคร",
      "postalCode": "10120",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.7214,
      "longitude": 100.5332
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "17:30"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="th" className={`${playfair.variable} ${prompt.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#0D2240] selection:text-white">
        {children}
      </body>
    </html>
  );
}
