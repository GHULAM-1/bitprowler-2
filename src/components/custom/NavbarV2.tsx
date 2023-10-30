"use client";

import { useState } from "react";
import CrossSVG from "../../../public/navImages/crossSVG";
import HamBurgerSVG from "../../../public/navImages/hamBurgerSVG";
import LogoSVG from "../../../public/navImages/logoSVG";
import MoonSVG from "../../../public/navImages/moonSVG";
import SunSVG from "../../../public/navImages/sunSVG";
import { useTogglingStore } from "@/store/store";
import Link from "next/link";

export default function NavbarV2() {
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  const isNavOpen = useTogglingStore((state: any) => state.isNavOpen);

  const changeCurrentTheme = useTogglingStore(
    (state: any) => state.changeCurrentTheme
  );
  const toggleNav = useTogglingStore((state: any) => state.toggleNav);

  return (
    <>
      <div className="flex w-screen flex-col  h-screen fixed z-50  ">
        {/* top bar */}
        <div className="flex w-full h-[10%]   dark:bg-[#242424] bg-[#DBDBDB] justify-between px-[7%]  items-center  ">
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
                onClick={() => toggleNav()}
              ></HamBurgerSVG>
            )}
            {isDarkTheme === true ? (
              <SunSVG
                className="dark:fill-white fill-black w-[32px] h-[32px]"
                onClick={() => changeCurrentTheme()}
              ></SunSVG>
            ) : (
              <MoonSVG
                className="dark:fill-white fill-black w-[32px] h-[32px]"
                onClick={() => changeCurrentTheme()}
              ></MoonSVG>
            )}
          </div>
        </div>

        {/* model */}

        {isNavOpen === true ? (
          <div className="h-[90%] w-full flex flex-col items-start bg-black">
            <Link href="/">
              <button onClick={() => toggleNav()}>home</button>
            </Link>
            <Link href="/aboutus">
              <button onClick={() => toggleNav()}>About us</button>
            </Link>
            <Link href="/contactus">
              <button onClick={() => toggleNav()}>Contact us</button>
            </Link>
            <Link href="/">
              <button onClick={() => toggleNav()}>Blog</button>
            </Link>
            <Link href="/">
              <button onClick={() => toggleNav()}>Packages</button>
            </Link>
            <Link href="/">
              <button onClick={() => toggleNav()}>Services</button>
            </Link>
          </div>
        ) : null}
        {/* model */}
      </div>
    </>
  );
}
