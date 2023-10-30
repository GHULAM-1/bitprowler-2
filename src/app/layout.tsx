import ThemeProviderWrapper from "@/components/Providers/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavbarV2 from "@/components/custom/NavbarV2";
import Navbar from "@/components/custom/Navbar";

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
      <body className="overflow-x-hidden text-[100%]">
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          <NavbarV2></NavbarV2>

          {children}
        </ThemeProviderWrapper>
        <script src="/node_modules/particles.js/particles.js"></script>
        <script src="/node_modules/particles.js/demo/js/app.js"></script>
      </body>
    </html>
  );
}
// ${inter.className}
