import SecuritySVG from "~/securitySVG";
const SVGClassNamesM =
  "fill-themeColor opacity-10 z-0 absolute  h-[60%] w-[60%] -bottom-5 -right-5 ";
const SVGClassNamesL =
  "aspect-square w-[660px] h-[660px] absolute z-[-1] bottom-0 right-0 opacity-20 fill-themeColor";
export const servicesPageSecurityContent = {
  name: "Security",
  iconL: <SecuritySVG className={SVGClassNamesL} />,
  iconM: <SecuritySVG className={SVGClassNamesM} />,
  hero: {
    quote: `“Technology trust is a good thing, but control is a better one.”`,
    author: "-Stephane Nappo",
  },

  whySection: {
    mainHeading: "Why Security?",
    subHeadings: [
      {
        id: 1,
        heading: "Protecting Data Integrity",
        brief:
          "Security safeguards the integrity of your data, preventing unauthorized access, tampering, or loss.",
      },

      {
        id: 2,
        heading: "Regulatory Compliance",
        brief:
          "Many industries require security measures to meet legal and regulatory obligations.",
      },

      {
        id: 3,
        heading: "Mitigating Financial Risks",
        brief:
          "Security minimizes the financial risks associated with data breaches, lawsuits, and operational disruptions.",
      },
    ],
  },

  approachSection: [
    {
      id: 1,
      heading: "Exceptional Team",
      brief:
        "Our security team comprises of professionals who have worked with global renowned companies such as Microsoft, Google, Apple including others Silicon Valley companies.",
    },
    {
      id: 2,
      heading: "Comprehensive DAST Solutions",
      brief:
        "We offer Dynamic Application Security Testing (DAST) services, ensuring your web applications are rigorously tested for vulnerabilities and weaknesses.",
    },
    {
      id: 3,
      heading: "Security Audits and Compliance",
      brief: "Ensuring your systems meet industry standards and regulations.",
    },
  ],
  oneLinerFirst: '"Security is ',
  oneLinerSecond: 'essential"',
  deliverables: [
    "Security Assessment Report",
    "Security Monitoring and Alerts",
    "Firewall and Intrusion Detection System Configuration",
    "Penetration Testing Results",
    "Security Audit and Compliance Documentation",
    "Security Consultation and Recommendations",
  ],
};
