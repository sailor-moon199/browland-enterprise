import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Browland Technologies | Building Intelligent Solutions",
    template: "%s | Browland Technologies",
  },
  description: "Premium technology consulting, software development, AI solutions, and corporate training based in Abuja, Nigeria. Transforming businesses through innovation.",
  keywords: [
    "Software Development Nigeria",
    "AI Solutions Nigeria",
    "Technology Consulting Abuja",
    "Mobile App Development",
    "Web Development",
    "Digital Transformation",
    "Corporate IT Training",
    "Artificial Intelligence Training",
    "Enterprise Software",
    "Cybersecurity Services",
    "Cloud Solutions",
    "IT Consulting Africa"
  ],
  authors: [{ name: "Browland Technologies" }],
  creator: "Browland Technologies",
  publisher: "Browland Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://browlandtech.com",
    siteName: "Browland Technologies",
    title: "Browland Technologies | Building Intelligent Solutions",
    description: "Premium technology consulting, software development, AI solutions, and corporate training based in Abuja, Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Browland Technologies | Building Intelligent Solutions",
    description: "Premium technology consulting, software development, AI solutions, and corporate training based in Abuja, Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-browland-dark">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
