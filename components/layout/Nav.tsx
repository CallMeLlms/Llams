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
              cursiveClass="text-4xl font-black leading-[0.9] lg:text-4xl"
              bodyClass="text-[18px] leading-[0.95]"
            />
          </div>

          <div>

              <div className="flex flex-col items-end">
                
                <CursiveCapital
                  text={navigationItems[1].label}
                  href={navigationItems[1].href}
                  cursiveClass="text-4xl font-black leading-[0.9] lg:text-xl"
                  bodyClass="text-[12px]"
                />
                        
                <CursiveCapital
                  text={navigationItems[2].label}
                  href={navigationItems[2].href}
                  cursiveClass="text-4xl font-black leading-[0.9] lg:text-xl"
                  bodyClass="text-[12px] leading-[0.95]"
                />
              </div>
          </div>

          
        </div>
      </div>
    </nav>
  );
}
