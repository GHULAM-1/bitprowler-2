"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MoonSVG from "../../../public/navImages/moonSVG";
import SunSVG from "../../../public/navImages/sunSVG";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "light" ? (
        <MoonSVG
          className="dark:fill-white fill-black w-[32px] h-[32px] cursor-pointer"
          onClick={() => setTheme("dark")}
        ></MoonSVG>
      ) : (
        <SunSVG
          className="dark:fill-white fill-black w-[32px] h-[32px] cursor-pointer"
          onClick={() => setTheme("light")}
        ></SunSVG>
      )}
    </>
  );
};

export default ThemeSwitch;
