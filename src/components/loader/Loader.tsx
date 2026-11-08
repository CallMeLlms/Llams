"use client";

import { useEffect, useState } from "react";
import { navigationItems } from "@/lib/portfolio-data";
import {
  getLoaderVideoSize,
  type LoaderVideoSize,
} from "@/utils/loader/loader-sizes";

export default function Loader() {
  const [size, setSize] = useState<LoaderVideoSize | null>(null);

  useEffect(() => {
    const update = () => setSize(getLoaderVideoSize(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const src = size?.src ?? null;

  return (
    <section
      id="intro"
      className="relative h-dvh w-full overflow-hidden bg-white"
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 flex justify-between px-4 py-6 sm:px-8 sm:py-10"
      >
        <div className="flex flex-col self-start">
          <div className="flex flex-col">
            <p className="text-sm text-white sm:text-2xl lg:text-3xl">
              Undergoing major changes
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end self-end">
          <p className="text-sm text-black sm:text-2xl lg:text-3xl">
            Quick links
          </p>

          <div className="flex flex-col">
            {navigationItems.map((itm) => (
              <a
                key={itm.href}
                href={itm.href}
                className="pointer-events-auto w-fit cursor-pointer justify-end text-sm text-black sm:text-xl lg:text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {itm.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {src && (
        <video
          key={src}
          className="absolute h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Intro animation"
          data-tier-key={size?.key}
          data-width={size?.width}
          data-height={size?.height}
        >
          <source src={src} type="video/webm" />
        </video>
      )}
    </section>
  );
}
