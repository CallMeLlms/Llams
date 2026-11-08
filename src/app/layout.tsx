import type { Metadata } from "next";
import { fontPixelta } from "@/utils/font";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Loader from "@/components/loader/Loader";
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

        {/* Just a placeholder for now focusing on the
         loader component design */}
          <SmoothScroll>
            <Loader/>
          </SmoothScroll>
      </body>
    </html>
  );
}
