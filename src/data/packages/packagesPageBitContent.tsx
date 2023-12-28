import WebDevSVG from "~/webDevSVG";
import SecuritySVG from "~/securitySVG";
import MarketingSVG from "~/marketingSVG";
import SeoSVG from "~/seoSVG";
import UxSVG from "~/uxSVG";
import { nanoid } from "nanoid";
const SVGClassNames = "fill-themeColor w-[1.5rem] h-[1.5rem]";
export const packagesPageBitContent = {
  price: 1000,
  name: "bit",
  description: "the perfect blend for small scale businesses",
  currency: "$",
  servicesIncluded: [
    {
      id: nanoid(),
      mainService: "Web Dev",
      icon: <WebDevSVG className={SVGClassNames} />,

      Deliverables: [
        "landing page ",
        "1-3 pages",
        "1 contact form",
        "responsive code",
        "exceptional loading time(0.3ms)",
      ],
    },
    {
      id: nanoid(),
      mainService: "Marketing",
      icon: <MarketingSVG className={SVGClassNames} />,
      Deliverables: [
        "Content Strategy",
        "7 scheduled social media posts",
        "Competitive analysis",
        "Audience reasearch and Targeting",
      ],
    },
    {
      id: nanoid(),
      mainService: "SEO",
      icon: <SeoSVG className={SVGClassNames} />,
      Deliverables: [
        "10 backlinks (high authority)",
        "3 Keyword Research",
        "5 Blog Posts",
      ],
    },
    {
      id: nanoid(),
      mainService: "UX Design",
      icon: <UxSVG className={SVGClassNames} />,
      Deliverables: [
        "Branding(Color Pallette , Typography , Logo)",
        "Wireframe",
        "Information Architecture",
        "Low fidielity Prototype (static UI)",
        "revisions 3",
      ],
    },

    {
      id: nanoid(),
      mainService: "Cyber Security",
      icon: <SecuritySVG className={SVGClassNames} />,
      Deliverables: [
        "Vulnerability Assesment and Penetrating Testing",
        "Encryption",
        "Generated Reports",
        "CyberSecurity Compilance (GDPR , Cyber Essentials)",
      ],
    },
  ],
};
