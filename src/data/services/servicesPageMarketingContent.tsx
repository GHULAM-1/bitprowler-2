import MarketingSVG from "~/marketingSVG";
const SVGClassNamesM =
  "fill-themeColor opacity-10 z-0 absolute  h-[60%] w-[60%] -bottom-5 -right-5 ";
const SVGClassNamesL =
  "aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor";
export const servicesPageMarketingContent = {
  name: "Marketing",
  iconL: <MarketingSVG className={SVGClassNamesL} />,
  iconM: <MarketingSVG className={SVGClassNamesM} />,
  hero: {
    quote: `“The most important thing in communication is to hear what isn't being said.”`,
    author: "-Peter Drucker",
  },

  whySection: {
    mainHeading: "Why Digital Marketing?",
    subHeadings: [
      {
        id: 1,
        heading: "Unparalleled Reach",
        brief:
          "Connects you with a global audience, expanding your reach like never before.",
      },

      {
        id: 2,
        heading: "Targeted Engagement",
        brief:
          "Ensuring that your marketing efforts engage the right people at the right time",
      },

      {
        id: 3,
        heading: "Increased Conversions",
        brief:
          "Conversion rates soar with the ability to reach and engage your target audience directly.",
      },
    ],
  },

  approachSection: [
    {
      id: 1,
      heading: "Brand Building",
      brief:
        "Digital marketing establishes and reinforces your brand's online presence, building credibility and trust.",
    },
    {
      id: 2,
      heading: "Strategic Insights",
      brief:
        "We provide strategic insights that go beyond campaigns, guiding your brand with a long-term vision.",
    },
    {
      id: 3,
      heading: "Customer-Centric",
      brief:
        "Your audience is at the heart of our strategies, creating memorable brand experiences.",
    },
  ],
  oneLinerFirst: '"Marketing is ',
  oneLinerSecond: 'storytelling"',
  deliverables: [
    "Content Marketing Plan",
    "Social Media Content Calendar",
    "Email Marketing Campaigns",
    "PPC Advertising Campaigns",
    "Social Media Advertising Campaigns",
    "Lead Generation Strategy",
    "Brand Development",
    "Conversion Rate Optimization",
  ],
};
