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
  // document.addEventListener("click", closingPackagesAndServices);

  return (
    <>
      <div
        className="flex  dark:bg-opacity-20 dark:bg-black bg-opacity-20 bg-white  backdrop-blur-[126px] border-b-[1px] dark:border-b-[#404040]   border-b-primaryBackgroundColorDark w-full  fixed z-[50] py-[1rem] justify-between px-[4.76%]  "
        onClick={closingPackagesAndServices}
      >
        <Link href="/">
          <LogoSVG className="w-[35px] h-[35px] fill-themeColor "></LogoSVG>
        </Link>

        <div className="w-full flex items-center justify-center">
          <div className="   flex w-full gap-[5.3%] justify-center  whitespace-nowrap">
            <Link href="/">
              <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text flex flex-col items-center hover:opacity-90 transition-all ease-linear  ">
                Home
              </button>
            </Link>
            <Link href="/aboutus">
              <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text hover:opacity-90 transition-all ease-linear">
                About us
              </button>
            </Link>
            <Link href="/contactus">
              <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text hover:opacity-90 transition-all ease-linear">
                Contact us
              </button>
            </Link>

            <Link href="/blog">
              <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text hover:opacity-90 transition-all ease-linear">
                Blog
              </button>
            </Link>
            <div>
              <div
                className="flex gap-[0.5rem] relative cursor-pointer "
                onClick={handleServicesDropDown}
              >
                <div className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text hover:opacity-90 transition-all ease-linear">
                  Services
                </div>
                <DropdownArrow
                  className={`w-[25px] h-[25px] fill-textPrimaryColor transition-all duration-100 ease-linear ${
                    isServicesOpen === false ? "-rotate-90" : null
                  }`}
                ></DropdownArrow>
              </div>
              <div
                className={` transition-all duration-100 ease-linear  ${
                  isServicesOpen ? "flex" : "hidden"
                } mt-[1.4rem] ml-[2rem] bg-secondaryBackgroundColor px-[1rem] py-[1rem] gap-[0.5rem] flex flex-col absolute    `}
              >
                <Link href="/services/web-development">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start pb-1">
                    web dev
                  </button>
                </Link>
                <Link href="/services/mobile-development">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start pb-1">
                    app dev
                  </button>
                </Link>
                <Link href="/services/marketing">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start pb-1">
                    marketing
                  </button>
                </Link>
                <Link href="/services/security">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start pb-1">
                    security
                  </button>
                </Link>
                <Link href="/services/uiux">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start pb-1">
                    ui/ux
                  </button>
                </Link>
                <Link href="/services/seo">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start pb-1">
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
                <div className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text hover:opacity-90 transition-all ease-linear">
                  Packages
                </div>
                <DropdownArrow
                  className={`w-[25px] h-[25px] fill-textPrimaryColor transition-all duration-100 ease-linear ${
                    isPackagesOpen === false ? "-rotate-90" : null
                  }`}
                ></DropdownArrow>
              </div>
              <div
                className={` ${
                  isPackagesOpen ? "flex" : "hidden"
                } mt-[1.4rem] ml-[2rem] bg-secondaryBackgroundColor px-[1rem] py-[1rem] gap-[0.5rem]  flex-col absolute  `}
              >
                <Link href="/packages/bitPackage">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text  border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start">
                    bit
                  </button>
                </Link>
                <Link href="/packages/megabitPackage">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start pb-1">
                    megabit
                  </button>
                </Link>
                <Link href="/packages/gigabitPackage">
                  <button className="text-textPrimaryColor text-SMALL_LAPTOP-S-Text border-b-2 border-b-secondaryBackgroundColor transition-all  hover:border-b-themeColor w-full flex justify-start pb-1">
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
