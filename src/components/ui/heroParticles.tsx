"use client";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";


export default function HeroParticles() {
    const { theme} = useTheme();
    const particlesInit = useCallback(async (engine: Engine) => {
    

      await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
      async (container: Container | undefined) => {
        await console.log(container);
      },
      []
    );

    return (
      <>
        {theme === "light" ? (
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
                  value: "#0c0a09",
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
        )}
      </>
    );
}
