import { nanoid } from "nanoid";
import CircleSVG from "~/stages/circleSVG";
import HexagonSVG from "~/stages/hexagonSVG";
import StarSVG from "~/stages/starSVG";
const SVGClasses =
  "fill-primaryBackgroundColor stroke-textPrimaryColor w-[40px] h-[40px] TABLET:w-[80px] TABLET:h-[80px]";

export const pageContent = {
  aboutusDescription:
    "Bitprowler is a full-service agency dedicated to crafting distinctive digital landscapes that provide you with a competitive edge.",

  manifesto: "You focus on your dream; we'll take care of the rest.",

  stages: [
    {
      id: nanoid(),
      heading: "Industry Expertise",
      brief:
        "Our team's global experience and presence in industry Halls of Fame (Google, Microsoft, Apple, Twitter) showcase our deep industry knowledge and international reach.",
      number: "01",
      icon: <CircleSVG className={SVGClasses} />,
    },

    {
      id: nanoid(),
      heading: "Innovation and Creativity",
      brief:
        "We are not bound by conventions; we redefine them. Our team's fresh ideas and creative solutions breathe life into every project, setting you apart in the digital landscape.",
      number: "02",
      icon: <HexagonSVG className={SVGClasses} />,
    },

    {
      id: nanoid(),
      heading: "Tailored Services for Every Scale",
      brief:
        "From individual solutions to our versatile Bit, Megabit, and Gigabit packages, we adapt to meet your unique digital needs with efficiency and precision.",
      number: "03 ",
      icon: <StarSVG className={SVGClasses} />,
    },
  ],
};
