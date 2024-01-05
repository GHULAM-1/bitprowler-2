import ThemeProviderWrapper from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavbarV2 from "@/components/ui/NavbarV2";
import { Analytics } from "@vercel/analytics/react";
import BigNavBarV2 from "@/components/ui/bigNavBarV2";

const poppins: any = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    template: "%s | bitprowler",
    default: "bitprowler",
  },
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
            <BigNavBarV2></BigNavBarV2>
          </div>
          <div className="SMALL_LAPTOP:hidden ">
            <NavbarV2></NavbarV2>
          </div>

          {children}
          <Analytics></Analytics>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
