'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; 
import { useTogglingStore } from "@/store/store";
// if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
export default function HeroVersionTwo() {
    const  isDarkTheme = useTogglingStore((state:any) => state.isDarkTheme) 

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);




    return (


<div className="w-screen h-screen ">
    <div className="top-div  flex flex-col justify-center items-center h-full">
        
            <h1 className="text-sub-heading font-base-weight clamp-hero2-main-heading flex text-center">
            Revolutionizing Digital Realities,
            </h1>

            <h1 className="text-sub-heading font-base-weight clamp-hero2-main-heading">
            One <span className="text-primary">Bit</span> at a Time.
            </h1>
           <button className="py-[1rem] px-[2.5rem] bg-primary text-text rounded-[0.5rem] mt-[2rem]">
            Get in Touch
           </button>
            
        
    </div>


    {isDarkTheme === true ?<Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}

                options={

                    {
                        fullScreen :{
                            enable:true,
                            zIndex : -1

                        },
                        background: {
                            color: {
                                value: "#000000",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
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
                                color: "#ffffff",
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
                    }
                }
            /> : 
            
            
            
            // light mode particles
            
            
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}

                options={

                    {
                        fullScreen :{
                            enable:true,
                            zIndex : -1

                        },
                        background: {
                            color: {
                                value: "#ffffff",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
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
                    }
                }
            />
            }

</div>

    );
};













