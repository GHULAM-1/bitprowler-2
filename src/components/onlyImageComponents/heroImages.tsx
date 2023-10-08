'use client'
import Image from "next/image";

import { useTogglingStore } from "@/store/store"
export default function HeroLogoImage(){
    const isDarkTheme = useTogglingStore((state:any)=> state.isDarkTheme)
    return <>

    {isDarkTheme?            <Image
                      className="mt-[1rem]"
                      src="/brand_images/bitprowler-white.svg"
                      alt="Logo Your Company"
                      width={300}
                      height={300}
                      quality={100}
                      sizes="100vw"
                    />:            <Image
                    className="mt-[1rem]"
                    src="/brand_images/bitprowler-black.svg"
                    alt="Logo Your Company"
                    width={300}
                    height={300}
                    quality={100}
                    sizes="100vw"
                  />}
    
    
    </>
}