import type { Metadata } from "next";
import {
  Architects_Daughter,
  Newsreader,
  Mea_Culpa,
  DM_Mono,
} from "next/font/google";

import "./globals.css";

const fontSans = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

const fontSerif = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const fontScript = Mea_Culpa({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mea-culpa",
});

const fontMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A personal portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontScript.variable} ${fontMono.variable} flex min-h-full flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}