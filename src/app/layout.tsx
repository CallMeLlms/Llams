import type { Metadata } from "next";
import { fontPixelta } from "@/utils/font";
import SmoothScroll from "@/components/motion/SmoothScroll";
import "./globals.css";
import "lenis/dist/lenis.css";

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
    <html lang="en" className={`h-full ${fontPixelta.variable}`}>
      <body className="flex min-h-full flex-col antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
