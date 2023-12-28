import UxSVG from "~/uxSVG";
const SVGClassNamesM =
  "fill-themeColor opacity-10 z-0 absolute  h-[60%] w-[60%] -bottom-5 -right-5 ";
const SVGClassNamesL =
  "aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor";
export const servicesPageUxContent = {
  name: "UX Design",
  iconL: <UxSVG className={SVGClassNamesL} />,
  iconM: <UxSVG className={SVGClassNamesM} />,
  hero: {
    quote: `"Good design is as little design as possible"`,
    author: "-Dieter Rams",
  },

  whySection: {
    mainHeading: "Why Ux Design?",
    subHeadings: [
      {
        id: 1,
        heading: "Increases Conversions",
        brief:
          "Streamlined user paths, clear calls to action, and an excellent user experience can lead to increased conversions and business growth.",
      },

      {
        id: 2,
        heading: "Better User Retention",
        brief:
          "Great UX keeps users coming back. It builds trust and loyalty, reducing churn and fostering long-term customer relationships.",
      },

      {
        id: 3,
        heading: "Data-Driven Decision Making",
        brief:
          "UX design is rooted in data and user research, allowing for informed design decisions and continuous improvement.",
      },
    ],
  },

  approachSection: [
    {
      id: 1,
      heading: "Responsive and Mobile-First",
      brief:
        "We design for multiple devices, ensuring that your digital presence is responsive and mobile-friendly, offering a consistent experience across screens of all sizes.",
    },
    {
      id: 2,
      heading: "Client-Centric Focus",
      brief:
        "Your success is our success. We're dedicated to helping you achieve your goals, with a keen understanding of the value of exceptional user experiences in reaching them.",
    },
    {
      id: 3,
      heading: "Iterative Excellence:",
      brief:
        "Our iterative design process means we never stop improving. We learn from user testing and feedback to refine and enhance your designs continuously.",
    },
  ],
  oneLinerFirst: `"UX is `,
  oneLinerSecond: `effective"`,
  deliverables: [
    "User Interface Design",
    "User Personas",
    "Competitive Analysis Report",
    "Information Architecture",
    "User Research",
    "Usability Testing",
    "Design Systems",
    "Wireframe",
    "Prototype",
  ],
};
