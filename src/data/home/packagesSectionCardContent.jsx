import React from "react";
import MSVG from "~/mSVG";
import BSVG from "~/bSVG";
import GSVG from "~/gSVG";
import { nanoid } from "nanoid";
export const packagesSectionCardContent = [
  {
    id: nanoid(),
    name: "bit",
    price: 1000,
    description: "The perfect blend for small scale businesses",
    deliverablesCount: 20,
    pagePath: "/packages/bitPackage",
    icon: (
      <BSVG className=" w-[60.2%] h-[70.5%] absolute z-10  bottom-0 right-0 blur-[10px] dark:fill-white fill-black " />
    ),
  },

  {
    id: nanoid(),
    name: "megabit",
    price: 2500,
    description:
      "Versatile solutions for medium-sized businesses' digital needs.",
    deliverablesCount: 30,
    pagePath: "/packages/gigabitPackage",
    icon: (
      <MSVG className="w-[83.0%] h-[46%] absolute z-10 bottom-0 -right-10 overflow-hidden blur-[10px] dark:fill-[#F3F5F6] fill-black   " />
    ),
  },
  {
    id: nanoid(),
    name: "gigabit",
    price: 5000,
    description:
      "Empower large enterprises with an all-encompassing tech-stack for unrivaled digital excellence.",
    deliverablesCount: 40,
    pagePath: "/packages/gigabitPackage",
    icon: (
      <GSVG className="w-[54.1%] h-[70.5%] absolute z-10  bottom-0 right-0 blur-[10px] dark:fill-white fill-black " />
    ),
  },

  {
    id: nanoid(),
    name: "dummy bit",
    price: 10000,
    description: "muhammad , this is a dummy card by dumb gama",
    deliverablesCount: 40,
    pagePath: "/dontBotherToChangeIt",
    icon: <span>dummy bit</span>,
  },
];
