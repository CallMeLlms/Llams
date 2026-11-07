import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const fontPixelta = localFont({
  src: "../public/fonts/PixeltaRegular-lxoDw.ttf",
  variable: "--font-pixelta",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Justine Llamera",
  description: "Justine Llamera — Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${fontPixelta.variable} flex min-h-full flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}