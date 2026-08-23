"use client";

import { navigationItems, portfolioName } from "@/lib/portfolio-data";
import CursiveCapital from "@/components/ui/CursiveCapital";

export default function Nav() {
  return (
    <nav aria-label="Primary" className="absolute w-full">
      <div>
        <div className="w-full flex items-start justify-between px-4 py-4">

      
          <div>
            <CursiveCapital
              text={navigationItems[0].label}
              cursiveClass="text-4xl leading-[0.9] lg:text-4xl"
              bodyClass="text-[18px] leading-[0.95]"
            />
          </div>

          <div className="flex flex-col items-end gap-2">
                {navigationItems.slice(1).map((item) => (
                  <CursiveCapital
                    key={item.href}
                    text={item.label}
                    href={item.href}
                    cursiveClass="text-4xl leading-[0.9] lg:text-xl"
                    bodyClass="text-[12px] leading-[0.95]"
                  />
                ))}
          </div>

          
        </div>
      </div>
    </nav>
  );
}
