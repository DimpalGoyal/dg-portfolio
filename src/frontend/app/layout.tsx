import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/context/ThemeContext";

export const metadata: Metadata = {
  title: "Dimpal Goyal | Full Stack & AI Developer",
  description:
    "Portfolio of Dimpal Goyal showcasing Full Stack Development, Backend Engineering, and Applied AI projects built with React, TypeScript, FastAPI, and Python.",
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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
