import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://alps-black-goat.vercel.app"
  ),

  title: "알프스 흑염소 | 울주 직영 농장산 흑염소 전문점",

  description:
    "울주 농장에서 직접 기른 100% 농장산 흑염소 전문점. 구이, 보양탕, 세트와 코스 요리를 정성껏 준비합니다.",

  icons: {
    icon: [
      {
        url: "/alps-favicon-v2.svg?v=2",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/alps-favicon-v2.svg?v=2",
  },

  openGraph: {
    title: "알프스 흑염소",
    description: "농장에서 식탁까지, 정직하게.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "알프스 흑염소",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "알프스 흑염소",
    description: "농장에서 식탁까지, 정직하게.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-JQC00RMSDQ" />

        {/* Naver Analytics */}
        <Script
          src="//wcs.naver.net/wcslog.js"
          strategy="afterInteractive"
        />

        <Script id="naver-analytics" strategy="afterInteractive">
          {`
            if (!window.wcs_add) {
              window.wcs_add = {};
            }

            window.wcs_add["wa"] = "1ab9ac5c65e2b60";

            if (window.wcs) {
              window.wcs_do();
            }
          `}
        </Script>
      </body>
    </html>
  );
}
    