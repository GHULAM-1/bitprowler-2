import { useTogglingStore } from "@/store/store";
import Image from "next/image"
import { useState } from "react"
type ServiceCardProps = {
    iconDark: string,
    iconLight : string
    mainHeading: string,
    description: string
}
export default function ServiceCard({ iconDark,iconLight , mainHeading, description }: ServiceCardProps) {
    const [isHover, setIsHover] = useState(false);
    const isDarkTheme = useTogglingStore((state: any) => state.isDarkTheme)
    

    function selectingCorrectArrow() {
        let arrow = ""
        if (isDarkTheme) {
            if (isHover) {
                arrow = "/serviceCardImages/arrowDarkHover.png"
                return arrow
            }
            else {
                    arrow = "/serviceCardImages/arrowDark.png"
                    return arrow
                
            }
        }

        else {
            arrow = "/serviceCardImages/arrowDarkHover.png"
            return arrow
        }
    }

    function selectingCorrectIcon() {
        let icon = ""
        if (isHover) {
             return iconLight
             
        }
        else {
            icon = iconDark
            return iconDark
        }
        
    }
    
    const currentIcon = selectingCorrectIcon()
    const currentArrow = selectingCorrectArrow()

    return <>

        <div className={` m-[2rem] min-w-[262px] rounded-[0.5rem] border flex flex-col  border-primary p-[1rem] dark:bg-[#151515] bg-[#EAEAEA] max-w-[25rem] hover:bg-primary dark:hover:bg-primary transition-transform transform ${isHover ? 'scale-105' : ''
            }`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className=" flex justify-end ">
                <Image
                    src={currentArrow}
                    width={49}
                    height={49}
                    alt="Picture of the author"
                />
            </div>

            <div className="my-[1.5rem]">
                <Image
                    src={currentIcon}
                    width={60}
                    height={60}
                    alt="Picture of the author"
                />
            </div>

            <div className="service-heading text-[40px] clamp-service-main-heading ">
                {mainHeading}
            </div>

            <div className="service-description text-[16px]">
                {description}
            </div>
        </div>
    </>
}