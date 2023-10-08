'use client'
import Image from "next/image";

import { useTogglingStore } from "@/store/store"
export default function NavbarLogoImage(){
    const isDarkTheme = useTogglingStore((state:any)=> state.isDarkTheme)
    return <>

    {isDarkTheme?           <Image
                      className="block h-14 w-auto"
                      src="/brand_images/b-white.svg"
                      alt="Logo Your Company"
                      width={50}
                      height={50}
                      // quality={30}
                      // sizes="50vw"
                    />:            <Image
                    className="block h-14 w-auto"
                    src="/brand_images/b-black.svg"
                    alt="Logo Your Company"
                    width={50}
                    height={50}
                    quality={75}
                    sizes="100vw"
                  />}
    
    
    </>
}