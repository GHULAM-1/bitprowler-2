import ThemeProviderWrapper from "@/components/Providers/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavbarV2 from "@/components/custom/NavbarV2";
import Navbar from "@/components/custom/Navbar";
import BigNavBarV2 from "@/components/custom/bigNavBarV2";
const poppins: any = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home",
  description: "bit prowler agency home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body className="overflow-x-hidden text-[100%] relative z-0">
        <ThemeProviderWrapper attribute="class" disableTransitionOnChange>
          {/* <Navbar /> */}

          <div className="hidden SMALL_LAPTOP:flex ">
            <BigNavBarV2></BigNavBarV2>
          </div>

          <div className="SMALL_LAPTOP:hidden">
            <NavbarV2></NavbarV2>
          </div>

          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
// ${inter.className}
