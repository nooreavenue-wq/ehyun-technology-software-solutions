import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import GoogleTranslateInit from "@/components/shared/GoogleTranslateInit";

export const metadata: Metadata = {
  metadataBase: new URL("https://ehyun.io"),
  title: {
    default: "Ehyun — Technology & Software Solutions",
    template: "%s — Ehyun",
  },
  description:
    "Ehyun is a technology and software development company that transforms business ideas, challenges, and requirements into reliable digital solutions.",
  openGraph: {
    title: "Ehyun — Technology & Software Solutions",
    description: "We don't just build software. We build technology partnerships.",
    siteName: "Ehyun",
    type: "website",
    url: "https://i.ibb.co.com/JWyqVQ4X/IMG-20260817-WA0007-jpg.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('ehyun-theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
        />
        <GoogleTranslateInit />
        {children}
      </body>
    </html>
  );
}
