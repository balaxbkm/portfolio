import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { BackgroundCircles } from "@/components/background-circles";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balakrishnan M | Senior Web Developer",
  description: "Portfolio of Balakrishnan M (Bala), a Senior Web Developer with 6+ years of experience in Next.js, React, PHP, Python, and more.",
  keywords: ["Web Developer", "Next.js", "React", "PHP", "Python", "Portfolio", "Balakrishnan M", "Bala"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <BackgroundCircles />
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
