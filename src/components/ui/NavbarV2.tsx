"use client";

import { useState } from "react";
import CrossSVG from "../../../public/navImages/crossSVG";
import HamBurgerSVG from "../../../public/navImages/hamBurgerSVG";
import LogoSVG from "../../../public/navImages/logoSVG";
import { useTogglingStore } from "@/stores/togglingStore";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeSwitch from "./ThemeSwitchButton";
import DropdownArrowSVG from "../../../public/arrows/dropdownArrowSVG";
export default function NavbarV2() {
  const { theme, setTheme } = useTheme();
  const toggleNav = useTogglingStore((state: any) => state.toggleNav);

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
    document.body.style.overflowY = "hidden";
    toggleNav();
    togglePackages(false);
    toggleServices(false);
  };
  const handleLogoNav = () => {
    if (isNavOpen) {
      toggleNav();
    }
  };
  const handleHamBurgerClosing = () => {
    document.body.style.overflowY = "visible";

    toggleNav();
  };

  const changeCurrentTheme = useTogglingStore(
    (state: any) => state.changeCurrentTheme
  );

  return (
    <>
      {/* top bar */}

      <div className="fixed w-full z-[50]">
        <div className="flex w-full top-0   dark:bg-opacity-20 dark:bg-black bg-opacity-20 bg-white  backdrop-blur-[126px] border-b-[1px] dark:border-b-[#404040]   border-b-primaryBackgroundColorDark justify-between px-[7%]  items-center overscroll-none   z-[50] py-[1.2%]">
          <Link href="/" className="flex  flex-col ">
            <LogoSVG
              className="w-[32px] h-[32px] fill-themeColor"
              onClick={handleLogoNav}
            ></LogoSVG>
          </Link>

          <div className="flex justify-center items-center gap-[0.5rem] flex-row-reverse">
            {isNavOpen === true ? (
              <CrossSVG
                className="fill-textPrimaryColor w-[44px] h-[44px]"
                onClick={handleHamBurgerClosing}
              ></CrossSVG>
            ) : (
              <HamBurgerSVG
                className=" fill-textPrimaryColor w-[44px] h-[44px]"
                onClick={clearingHam}
              ></HamBurgerSVG>
            )}
            <ThemeSwitch></ThemeSwitch>
          </div>
        </div>

        {/* model */}

        {isNavOpen === true ? (
          <div className="  h-screen w-full flex flex-col items-start dark:bg-black bg-white pl-[7.44%] text-black dark:text-white overflow-scroll pt-[3rem]   ">
            <Link href="/">
              <button
                onClick={handleHamBurgerClosing}
                className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] mt-[15.44%]"
              >
                Home
              </button>
            </Link>
            <Link href="/aboutus">
              <button
                onClick={handleHamBurgerClosing}
                className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] "
              >
                About us
              </button>
            </Link>
            <Link href="/contactus">
              <button
                onClick={handleHamBurgerClosing}
                className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] "
              >
                Contact us
              </button>
            </Link>
            <Link href="/blog ">
              <button
                onClick={handleHamBurgerClosing}
                className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] "
              >
                Blog
              </button>
            </Link>

            <div onClick={handlePackagesToggle}>
              <div className="flex gap-[1rem] items-center ">
                <div className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] ">
                  Packages
                </div>
                <DropdownArrowSVG
                  className={`transition-all duration-100 ease-linear w-[48px] h-[48px] fill-textPrimaryColor mb-[1rem] ${
                    isPackagesOpen === false ? "-rotate-90" : null
                  }`}
                ></DropdownArrowSVG>
              </div>
              {isPackagesOpen === true ? (
                <div className="flex flex-col mb-[2rem]">
                  <Link href="/packages/bitPackage">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      bit
                    </button>
                  </Link>
                  <Link href="/packages/megabitPackage">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      megabit
                    </button>
                  </Link>
                  <Link href="/packages/gigabitPackage">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      gigabit
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>

            <div onClick={handleServicesToggle} className="mb-28">
              <div className="flex gap-[1rem] items-center  ">
                <div className="text-Mobile-L-Head text-black dark:text-white mb-[7.44%] ">
                  Services
                </div>  
                <DropdownArrowSVG
                  className={` transition-all duration-100 ease-linear w-[48px] h-[48px] fill-textPrimaryColor mb-[1rem] ${
                    isServicesOpen === false ? "-rotate-90" : null
                  }`}
                ></DropdownArrowSVG>
              </div>
              {isServicesOpen === true ? (
                <div className="flex flex-col mb-[2rem]">
                  <Link href="/services/web-development">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      web dev
                    </button>
                  </Link>
                  <Link href="/services/mobile-development">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      app dev
                    </button>
                  </Link>
                  <Link href="/services/seo">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      seo
                    </button>
                  </Link>
                  <Link href="/services/security">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      security
                    </button>
                  </Link>
                  <Link href="/services/uiux">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] mb-[0.75rem]"
                    >
                      ui/ux
                    </button>
                  </Link>
                  <Link href="/services/marketing">
                    <button
                      onClick={handleHamBurgerClosing}
                      className="text-Mobile-Head dark:text-white text-black pl-[1.5rem] "
                    >
                      marketing
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
