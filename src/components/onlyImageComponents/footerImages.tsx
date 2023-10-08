'use client'
import Image from "next/image";

import { useTogglingStore } from "@/store/store"
export default function FooterLogoImage(){
    const isDarkTheme = useTogglingStore((state:any)=> state.isDarkTheme)
    return <>

    {isDarkTheme?             <Image
              className="h-8 w-auto"
              src="/brand_images/bitprowler-white.svg"
              alt="Logo Your Company"
              width={150}
              height={150}
              quality={75}
              sizes="100vw"
            />:             <Image
            className="h-8 w-auto"
            src="/brand_images/bitprowler-black.svg"
            alt="Logo Your Company"
            width={150}
            height={150}
            quality={75}
            sizes="100vw"
          />}
    
    
    </>
}