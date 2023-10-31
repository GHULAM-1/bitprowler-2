"use client";

import { useState } from "react";
import CrossSVG from "../../../public/navImages/crossSVG";
import HamBurgerSVG from "../../../public/navImages/hamBurgerSVG";
import LogoSVG from "../../../public/navImages/logoSVG";
import MoonSVG from "../../../public/navImages/moonSVG";
import SunSVG from "../../../public/navImages/sunSVG";
import { useTogglingStore } from "@/store/store";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NavbarV2() {
  const { theme, setTheme } = useTheme();

  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  const isNavOpen = useTogglingStore((state: any) => state.isNavOpen);
  const [isPackagesOpen, togglePackages] = useState(false);
  const [isServicesOpen, toggleServices] = useState(false);

  const handlePackagesToggle = () => {
    togglePackages(!isPackagesOpen);
    if (isServicesOpen) {
      toggleServices(false);
    }
  };

  const handleServicesToggle = () => {
    toggleServices(!isServicesOpen);
    if (isPackagesOpen) {
      togglePackages(false);
    }
  };

  const clearingHam = () => {
    toggleNav();
    togglePackages(false);
    toggleServices(false);
  };

  const changeCurrentTheme = useTogglingStore(
    (state: any) => state.changeCurrentTheme
  );
  const toggleNav = useTogglingStore((state: any) => state.toggleNav);

  return (
    <>
      <div className="flex w-screen flex-col  h-screen fixed z-50  ">
        {/* top bar */}
        <div className="flex w-full h-[8%]   dark:bg-[#242424] bg-[#DBDBDB] justify-between px-[7%]  items-center  ">
          <Link href="/" className="flex  flex-col">
            <LogoSVG className="w-[32px] h-[32px] fill-primary"></LogoSVG>
          </Link>

          <div className="flex justify-center items-center gap-[0.5rem] flex-row-reverse">
            {isNavOpen === true ? (
              <CrossSVG
                className="dark:fill-white fill-black w-[44px] h-[44px]"
                onClick={() => toggleNav()}
              ></CrossSVG>
            ) : (
              <HamBurgerSVG
                className="dark:fill-white fill-black w-[44px] h-[44px]"
                onClick={clearingHam}
              ></HamBurgerSVG>
            )}
            {theme === "dark" ? (
              <SunSVG
                className="dark:fill-white fill-black w-[32px] h-[32px]"
                onClick={() => setTheme("light")}
              ></SunSVG>
            ) : (
              <MoonSVG
                className="dark:fill-white fill-black w-[32px] h-[32px]"
                onClick={() => setTheme("dark")}
              ></MoonSVG>
            )}
          </div>
        </div>

        {/* model */}

        {isNavOpen === true ? (
          <div className="h-[92%] w-full flex flex-col items-start dark:bg-black bg-white pl-[7.44%] text-black dark:text-white">
            <Link href="/">
              <button
                onClick={() => toggleNav()}
                className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] mt-[15.44%]"
              >
                Home
              </button>
            </Link>
            <Link href="/aboutus">
              <button
                onClick={() => toggleNav()}
                className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] "
              >
                About us
              </button>
            </Link>
            <Link href="/contactus">
              <button
                onClick={() => toggleNav()}
                className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] "
              >
                Contact us
              </button>
            </Link>
            <Link href="/">
              <button
                onClick={() => toggleNav()}
                className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] "
              >
                Blog
              </button>
            </Link>

            <div onClick={handlePackagesToggle}>
              <div className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] ">
                Packages
              </div>

              {isPackagesOpen === true ? (
                <div className="flex flex-col mb-[2rem]">
                  <Link href="/packages/bitPackage">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      bit
                    </button>
                  </Link>
                  <Link href="/packages/megabitPackage">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      megabit
                    </button>
                  </Link>
                  <Link href="/packages/gigabitPackage">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      gigabit
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>

            <div onClick={handleServicesToggle}>
              <div className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] ">
                Services
              </div>

              {isServicesOpen === true ? (
                <div className="flex flex-col mb-[2rem]">
                  <Link href="/services/web-development">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      web dev
                    </button>
                  </Link>
                  <Link href="/services/mobile-development">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      app dev
                    </button>
                  </Link>
                  <Link href="/services/seo">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      seo
                    </button>
                  </Link>
                  <Link href="/services/security">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      security
                    </button>
                  </Link>
                  <Link href="/services/uiux">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      ui/ux
                    </button>
                  </Link>
                  <Link href="/services/marketing">
                    <button
                      onClick={() => toggleNav()}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      marketing
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        {/* model */}
      </div>
    </>
  );
}
