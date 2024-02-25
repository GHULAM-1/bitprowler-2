import ThemeProviderWrapper from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavbarV2 from "@/components/ui/NavbarV2";
import { Analytics } from "@vercel/analytics/react";
import BigNavBarV2 from "@/components/ui/bigNavBarV2";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
const poppins: any = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    template: "%s - bitprowler",
    default: "bitprowler",
  },
  description:
    "BitProwler: Elevate your startup with web/app dev, marketing, UI/UX, security, SEO expertise. Tailored packages for digital success. Let's innovate together!",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "GhulamMohi-ud-Din",
      url: "https://bitprowler.com",
    },
    {
      name: "Muhammad-Bin-Shahzad",
      url: "https://bitprowler.com",
    },
    {
      name: "Muhammad Sarim Ibrahim",
      url: "https://bitprowler.com",
    },
    {
      name: "Abdul Moiz",
      url: "https://bitprowler.com",
    },
  ],
  creator: "GhulamMohi-ud-Din",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bitprowler.com/",
    title: "bitprowler",
    description:
      "BitProwler: Elevate your startup with web/app dev, marketing, UI/UX, security, SEO expertise. Tailored packages for digital success. Let's innovate together!",
    siteName: "bitprowler",
  },

  twitter: {
    card: "summary_large_image",
    title: "bitprowler",
    description:
      "BitProwler: Elevate your startup with web/app dev, marketing, UI/UX, security, SEO expertise. Tailored packages for digital success. Let's innovate together!",
    creator: "@bitprowler",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body className="overflow-x-hidden  text-[100%] relative z-0 selection:bg-fuchsia-300 selection:text-fuchsia-900 ">
        <ThemeProviderWrapper attribute="class" disableTransitionOnChange>
          <div className="hidden SMALL_LAPTOP:flex ">
            <BigNavBarV2 />
          </div>
          <div className="SMALL_LAPTOP:hidden ">
            <NavbarV2 />
          </div>

          {children}
          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" />

          <SpeedInsights />
          <Analytics />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
