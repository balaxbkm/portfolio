import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { BackgroundCircles } from "@/components/background-circles";
import { InteractiveNetworkBackground } from "@/components/interactive-network-background";
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
  title: "Balakrishnan M | Senior Software Engineer",
  description: "Portfolio of Balakrishnan M, a Senior Software Engineer with 8+ years of experience in PHP (Laravel, CodeIgniter), React, Next.js, Node.js, AI workflows, and Playwright automation.",
  keywords: ["Senior Software Engineer", "Full Stack Developer", "Laravel", "CodeIgniter", "Next.js", "React", "Node.js", "Playwright", "LLM Integration", "Balakrishnan M", "Bala"],
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
          <InteractiveNetworkBackground />
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
