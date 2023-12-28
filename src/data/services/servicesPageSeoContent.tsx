import SeoSVG from "~/seoSVG";
const SVGClassNamesM =
  "fill-themeColor opacity-10 z-0 absolute  h-[60%] w-[60%] -bottom-5 -right-5 ";
const SVGClassNamesL =
  "aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor";
export const servicesPageSeoContent = {
  name: "SEO",
  iconL: <SeoSVG className={SVGClassNamesL} />,
  iconM: <SeoSVG className={SVGClassNamesM} />,
  hero: {
    quote: `“Commit to a niche; try to stop being everything to everyone.”`,
    author: "-Andrew Davis",
  },

  whySection: {
    mainHeading: "Why SEO?",
    subHeadings: [
      {
        id: 1,
        heading: " Enhanced Online Visibility",
        brief:
          "Making it easier for potential customers to find your business when they search.",
      },

      {
        id: 2,
        heading: "Targeted Audience Reach",
        brief:
          "Enabling you to reach the right audience, ensuring that your content is seen by those most likely to engage with it.",
      },

      {
        id: 3,
        heading: "Competitive Advantage",
        brief:
          "Outranking competitors in search results gives you a competitive edge, helping your business stand out.",
      },
    ],
  },

  approachSection: [
    {
      id: 1,
      heading: "Proven Results",
      brief:
        "We have a track record of achieving exceptional results for our clients.",
    },
    {
      id: 2,
      heading: "Tailored Strategies",
      brief:
        "We don't believe in one-size-fits-all solutions. Our SEO strategies are customized to your unique business goals, industry, and target audience.",
    },
    {
      id: 3,
      heading: "Ethical Practices",
      brief:
        "We strictly adhere to ethical and white-hat SEO practices. Our approach is built on transparency, integrity, and a commitment to following industry best practices.",
    },
  ],
  oneLinerFirst: '"SEO is ',
  oneLinerSecond: 'visibility"',
  deliverables: [
    "Keyword Research and Analysis",
    "On-Page SEO Recommendations",
    "Off-Page SEO Strategies",
    "Competitor Analysis",
    "Content Strategy",
    "Mobile-Friendly Recommendations",
    "Site Speed Optimization",
  ],
};
