'use client'
import { useTogglingStore } from "@/store/store"
import PackagesContent from "./packagesContent"
import { H1 } from "../typography/H1"
import { Button } from "../ui/button"
import { CloudCog } from "lucide-react"

export default function PackagesButtonGroup(){
    const currentPackage = useTogglingStore((state:any)=> state.currentPackage)
    const changeCurrentPackage = useTogglingStore((state:any)=> state.changeCurrentPackage)
    const handleChangingState = (event: React.MouseEvent<HTMLButtonElement>) => {
            const buttonsInnerText = event.currentTarget.innerText
            if (buttonsInnerText === "bit"){
                    changeCurrentPackage("bit")
            }
            
            if (buttonsInnerText === "megabit"){
                    changeCurrentPackage("megabit")
            }
            
            if (buttonsInnerText === "gigabit"){
                    changeCurrentPackage("gigabit")
            }
    }
    return<>
    <div className="flex flex-col justify-center items-center gap-[2rem] mb-[3rem]">
        
    <H1>Our Packages</H1>
    <div>
    <Button className="px-[4rem] py-[1.7rem] text-xl text-white  mr-[1rem]" variant={currentPackage === "bit"?"activated":"outline"} onClick={handleChangingState}>bit</Button>
    <Button className="px-[4rem] py-[1.7rem] text-xl text-white  mr-[1rem]"variant={currentPackage === "megabit"?"activated":"outline"} onClick={handleChangingState}>megabit</Button>
    <Button className="px-[4rem] py-[1.7rem] text-xl text-white "variant={currentPackage === "gigabit"?"activated":"outline"} onClick={handleChangingState}>gigabit</Button>

    </div>
    </div>

    
    </>
    
    
}