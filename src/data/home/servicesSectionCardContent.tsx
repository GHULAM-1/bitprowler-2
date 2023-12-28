import React from "react";

import WebDevSVG from "~/webDevSVG";
import AppDevSVG from "~/appDevSVG";
import SeoSVG from "~/seoSVG";
import SecuritySVG from "~/securitySVG";
import MarketingSVG from "~/marketingSVG";
import UxSVG from "~/uxSVG";
import { nanoid } from "nanoid";

const SVGClasses =
  "fill-themeColor h-[80px] w-[80px]  group-hover:fill-textPrimaryColor my-[4.34%] ";

export const ServicesSectionCardContent = [
  {
    id: nanoid(),
    mainHeading: "Web Dev",
    description:
      "Crafting blazing fast loading pages exceeding your business expectations.",
    pagePath: "/services/web-development",
    icon: <WebDevSVG className={SVGClasses} />,
  },

  {
    id: nanoid(),
    mainHeading: "SEO",
    description: "Elevating your business's visibility.",
    pagePath: "/services/seo",
    icon: <SeoSVG className={SVGClasses} />,
  },

  {
    id: nanoid(),
    mainHeading: "Security",
    description: "Protecting your business, safeguarding your success.",
    pagePath: "/services/security",
    icon: <SecuritySVG className={SVGClasses} />,
  },

  {
    id: nanoid(),
    mainHeading: "Marketing",
    description:
      "Empower your business with strategic marketing solutions for lasting success.",
    pagePath: "/services/marketing",
    icon: <MarketingSVG className={SVGClasses} />,
  },

  {
    id: nanoid(),
    mainHeading: "UX design",
    description: "Elevate user experience through thoughtful design.",
    pagePath: "/services/uiux",
    icon: <UxSVG className={SVGClasses} />,
  },

  {
    id: nanoid(),
    mainHeading: "App Dev",
    description: "Turn your app idea into reality.",

    pagePath: "/services/mobile-development",
    icon: <AppDevSVG className={SVGClasses} />,
  },
];
