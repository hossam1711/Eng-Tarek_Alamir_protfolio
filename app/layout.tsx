import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

// Optimized fonts with display: swap
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Tarek Mahmoud Alamir | Electrical & ELV Engineer",
  description: "Electrical & ELV Engineer with hands-on experience in Fire Alarm, CCTV, Public Address, and Access Control systems. Design, shop drawings, site supervision, testing & commissioning.",
  keywords: ["Electrical Engineer", "ELV Engineer", "Fire Alarm Engineer", "Light Current Systems", "CCTV", "Public Address", "Access Control", "Simplex", "AutoCAD"],
  authors: [{ name: "Tarek Mahmoud Alamir" }],
  creator: "Tarek Mahmoud Alamir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarek-alamir-portfolio.vercel.app/",
    title: "Tarek Mahmoud Alamir | Electrical & ELV Engineer",
    description: "Electrical & ELV Engineer delivering reliable, high-quality ELV technical solutions.",
    siteName: "Tarek's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarek Mahmoud Alamir | Electrical & ELV Engineer",
    description: "Electrical & ELV Engineer delivering reliable, high-quality ELV technical solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "sTT9l0Fz0VJOj7NP6nQsfIPJqPfSyj0xXcPGoM8OUI8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color */}
        {/* <meta name="theme-color" content="#e964c1" /> */}
      </head>
      <body className={`${inter.className} ${tajawal.className} antialiased bg-[#0a0a0a] text-[#e4e4e4]`}>
        <ResponsiveNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
