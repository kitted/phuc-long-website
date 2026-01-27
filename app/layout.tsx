import "../global.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Providers } from "./provider";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://phutungdaunhot.com"),

  title: {
    default: "PlusEx Phúc Long",
    template: "%s | phutungdaunhot.com",
  },
  description: "PlusEx Phúc Long Nhà Phân Phối Phụ Tùng - Dầu Nhớt Chính Hãng",

  openGraph: {
    title: "PlusEx Phúc Long",
    description:
      "PlusEx Phúc Long Nhà Phân Phối Phụ Tùng - Dầu Nhớt Chính Hãng",
    url: "https://phutungdaunhot.com",
    siteName: "PlusEx Phúc Long",
    locale: "vi_VN",
    type: "website",
    images: [
      // Ưu tiên Facebook (tỉ lệ 1.91:1)
      {
        url: "/og/og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "PlusEx Phúc Long",
      },
      // Dự phòng vuông (một số nền tảng/Zalo có thể dùng)
      {
        url: "/og/og-1200x1200.png",
        width: 1200,
        height: 1200,
        alt: "PlusEx Phúc Long",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PlusEx Phúc Long",
    description:
      "PlusEx Phúc Long Nhà Phân Phối Phụ Tùng - Dầu Nhớt Chính Hãng",
    images: ["/og/og-1200x630.png"],
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

  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function()
              {n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '917311030862996');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <Providers>{children}</Providers>

        {/* Facebook Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=917311030862996&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
