"use client";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useTogglingStore } from "@/store/store";
import { useTheme } from "next-themes";
import Link from "next/link";
export default function HeroSection() {
  const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme);
  const { theme, setTheme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-[1.86%] ">
      <div className="  top-div  flex flex-col justify-center items-center h-full w-full TABLET:px-[11%] TABLET:items-start SMALL_LAPTOP:items-center ">
        <h1 className="text-Mobile-Head  font-medium  flex text-center TABLET:text-Tablet-S-Heading TABLET:text-left SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading SMALL_LAPTOP:text-center ">
          Revolutionizing Digital Realities,
        </h1>

        <h1 className="text-Mobile-Head font-medium  text-center TABLET:text-Tablet-S-Heading TABLET:text-left SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading SMALL_LAPTOP:text-center">
          One <span className="text-themeColor">Bit</span> at a Time.
        </h1>
        <Link href="/contactus">
          <button className="py-[0.75rem] px-[1.5rem] bg-themeColor text-Mobile-Text rounded-[0.5rem] mt-[1rem] TABLET:text-SMALL_LAPTOP-Text TABLET:px-[2.5rem] TABLET:py-[1rem] ">
            Get in Touch
          </button>
        </Link>
      </div>

      {theme === "dark" ? (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            background: {
              color: {
                value: "#0c0a09",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse", // repulse for interaction
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#cc2c14",
              },
              links: {
                color: "#f3f5f6",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 900,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      ) : (
        // light mode particles

        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: true,
              zIndex: -1,
            },
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#cc2c14",
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 900,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
