'use client'
import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({children}:any){
    return    <ThemeProvider  attribute="class"
    
    disableTransitionOnChange>
   
{children}


</ThemeProvider>

}