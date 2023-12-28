import WebDevSVG from "~/webDevSVG";
import SecuritySVG from "~/securitySVG";
import MarketingSVG from "~/marketingSVG";
import SeoSVG from "~/seoSVG";
import UxSVG from "~/uxSVG";
import { nanoid } from "nanoid";
const SVGClassNames = "fill-themeColor w-[1.5rem] h-[1.5rem]";

export const packagesPageGigabitContent = {
  price: 5000,
  name: "gigabit",
  description: "seamless growth,boundless possibilities:elevating enterprises",
  currency: "$",
  servicesIncluded: [
    {
      id: nanoid(),
      mainService: "Web Dev/App Dev",
      icon: <WebDevSVG className={SVGClassNames} />,
      Deliverables: [
        "landing page ",
        "1-5 pages",
        "5 different kind of forms",
        "responsive code",
        "exceptional loading time(0.3ms)",
        "Custom Blog",
        "Newsletter Integration",
      ],
    },
    {
      id: nanoid(),
      mainService: "Marketing",
      icon: <MarketingSVG className={SVGClassNames} />,
      Deliverables: [
        "Content Strategy",
        "30 scheduled social media posts",
        "Competitive analysis",
        "Audience reasearch and Targeting",
        "Conten Calender Planning",
        "5 Ad Campaign (All Platforms)",
      ],
    },
    {
      id: nanoid(),
      mainService: "SEO",
      icon: <SeoSVG className={SVGClassNames} />,
      Deliverables: [
        "100 backlinks (high authority)",
        "8 Keyword Research",
        "30 Blog Posts",
      ],
    },
    {
      id: nanoid(),
      mainService: "UX Design",
      icon: <UxSVG className={SVGClassNames} />,
      Deliverables: [
        "Brand Identity(Color Pallette , Typography , Logo)",
        "Wireframe",
        "Information Architecture",
        "High fidielity Prototype (Dynamic UI)",
        "revisions 5",
        "User Personas",
        "Usability Testing and User Research",
        "Design System",
        "Product Visualization",
        "3D Modeling",
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
        "CyberSecurity Compilance (GDPR , ISO27001)",
        "Security Audit and Compilance",
        "Firewall and Intrusion",
        "Detection/Prevention Systems (IDS/IPS) Management",
        "Security Consulting and Advisory Services",
      ],
    },
  ],
};
