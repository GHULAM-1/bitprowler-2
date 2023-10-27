import ThemeProviderWrapper from "@/components/Providers/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/custom/Navbar";
import LongBottom from "@/components/custom/longBottom";

const inter = Poppins({
  weight: "400",
  subsets: ["latin", "latin", "latin-ext"],
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
    <html lang="en" suppressHydrationWarning className="">
      <body className="overflow-x-hidden">
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProviderWrapper>
        <script src="/node_modules/particles.js/particles.js"></script>
        <script src="/node_modules/particles.js/demo/js/app.js"></script>
      </body>
    </html>
  );
}
// ${inter.className}
