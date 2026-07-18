import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dimpal Goyal | Full Stack & AI Developer",
  description:
    "Portfolio of Dimpal Goyal showcasing Full Stack Development, Backend Engineering, and Applied AI projects built with React, TypeScript, FastAPI, and Python.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Dimpal Goyal | Full Stack & AI Developer",
    description:
      "Explore my projects, technical skills, and experience in Full Stack Development, Backend Engineering, and Applied AI.",
    url: "https://dg-portfolio-smoky.vercel.app",
    siteName: "Dimpal Goyal Portfolio",
    images: [
      {
        url: "https://dg-portfolio-smoky.vercel.app/thumbnails/portfolio.webp",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimpal Goyal | Full Stack & AI Developer",
    description:
      "Portfolio showcasing Full Stack, Backend, and AI projects.",
    images: [
      "https://dg-portfolio-smoky.vercel.app/thumbnails/portfolio.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="preconnect" href="https://api.microlink.io" />
      </head>
      <body className={inter.className}>
        <ThemeProvider><ErrorBoundary>{children}</ErrorBoundary></ThemeProvider>
      </body>
    </html>
  );
}
