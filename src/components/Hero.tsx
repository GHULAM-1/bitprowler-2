
import { useTogglingStore } from "@/store/store";
import HeroLogoImage from "./onlyImageComponents/heroImages";
import Image from "next/image";
import Link from "next/link";
import NavbarLogoImage from "./onlyImageComponents/navbarImages";
export function Hero() {
  const isDarkTheme = useTogglingStore((state:any)=> state.isDarkTheme)

  return (
    <div className="bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-5xl font-bold ">
            Welcome to <br />{" "}
      
           
                  <HeroLogoImage></HeroLogoImage>

          </h1>
          <p className="pt-6 text-base w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            Bit Prowler is dedicated to empowering businesses through innovative digital solutions. Our mission is to deliver excellence in web and mobile development, marketing, SEO, and security services, ensuring our clients thrive in the ever-evolving digital landscape.
          </p>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start">
          {/* <div>
              <Link href="#services">
                <button className="bg-black dark:bg-white text-white dark:text-black text-base rounded-full px-4 p-2 font-medium">
                  Ver más
                </button>
              </Link>
            </div> */}

            <div>
              <Link href="https://github.com/humberni/halley/blob/main/README.md" target="_blank">
                <button className="bg-primary text-white text-base rounded px-4 p-2 font-medium">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="/images/hero/hero.svg"
            alt="Image hero description"
            width={1025}
            height={662}
            quality={75}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
