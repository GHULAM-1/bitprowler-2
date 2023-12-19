'use client'
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

export default function ThemeProviderWrapper({children}:any){
    return (
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <NextTopLoader
          zIndex={100}
          color="#cc2c14"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          // shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />

        {children}
      </ThemeProvider>
    );

}