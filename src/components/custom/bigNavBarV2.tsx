"use client";
import ThemeSwitch from "./ThemeSwitchButton";
import LogoSVG from "../../../public/navImages/logoSVG";
import DropdownArrow from "../../../public/arrows/dropdownArrowSVG";
import Link from "next/link";
import { useState } from "react";
export default function BigNavBarV2() {
  const [isServicesOpen, toggleServices] = useState(false);
  const [isPackagesOpen, togglePackages] = useState(false);

  const handleServicesDropDown = () => {
    if (isPackagesOpen) {
      togglePackages(false);
    }
    toggleServices(!isServicesOpen);
  };

  const handlePackagesDropDown = () => {
    if (isServicesOpen) {
      toggleServices(false);
    }
    togglePackages(!isPackagesOpen);
  };

  const closingPackagesAndServices = () => {
    if (isPackagesOpen) {
      togglePackages(false);
    }

    if (isServicesOpen) {
      toggleServices(false);
    }
  };

  return (
    <>
      <div
        className="flex  bg-opacity-25  backdrop-blur-[126px] border-b-[1px] dark:border-b-[#404040]   border-b-primaryBackgroundColorDark w-full  fixed z-[50] py-[1rem] justify-between px-[4.76%] "
        onClick={closingPackagesAndServices}
      >
        <Link href="/">
          <LogoSVG className="w-[35px] h-[35px] fill-themeColor "></LogoSVG>
        </Link>

        <div className="w-full flex items-center justify-center">
          <div className="   flex w-full gap-[5.3%] justify-center  whitespace-nowrap">
            <Link href="/">
              <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text ">
                Home
              </button>
            </Link>

            <Link href="/aboutus">
              <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                About us
              </button>
            </Link>

            <Link href="/contactus">
              <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                Contact us
              </button>
            </Link>

            <Link href="/blog">
              <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                Blog
              </button>
            </Link>

            <div>
              <div
                className="flex gap-[0.5rem] relative cursor-pointer "
                onClick={handleServicesDropDown}
              >
                <div className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text ">
                  Services
                </div>
                <DropdownArrow className="w-[25px] h-[25px] fill-textPrimaryColor"></DropdownArrow>
              </div>
              <div
                className={` ${
                  isServicesOpen ? "flex" : "hidden"
                } mt-[1.4rem] ml-[2rem] bg-secondaryBackgroundColor px-[1rem] py-[1rem] gap-[0.5rem] flex flex-col absolute transition-all duration-300 ease-in-out`}
              >
                <Link href="/services/web-development">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    web dev
                  </button>
                </Link>
                <Link href="/services/mobile-development">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    app dev
                  </button>
                </Link>
                <Link href="/services/marketing">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    marketing
                  </button>
                </Link>
                <Link href="/services/security">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    security
                  </button>
                </Link>
                <Link href="/services/uiux">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    ui/ux
                  </button>
                </Link>
                <Link href="/services/seo">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    seo
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <div
                className="flex gap-[0.5rem] relative cursor-pointer"
                onClick={handlePackagesDropDown}
              >
                <div className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                  Packages
                </div>
                <DropdownArrow className="w-[25px] h-[25px] fill-textPrimaryColor"></DropdownArrow>
              </div>
              <div
                className={` ${
                  isPackagesOpen ? "flex" : "hidden"
                } mt-[1.4rem] ml-[2rem] bg-secondaryBackgroundColor px-[1rem] py-[1rem] gap-[0.5rem]  flex-col absolute `}
              >
                <Link href="/packages/bitPackage">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    bit
                  </button>
                </Link>
                <Link href="/packages/megabitPackage">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    megabit
                  </button>
                </Link>
                <Link href="/packages/gigabitPackage">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text">
                    gigabit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ThemeSwitch></ThemeSwitch>
      </div>
    </>
  );
}
