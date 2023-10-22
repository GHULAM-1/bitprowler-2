'use client'
import { useTogglingStore } from "@/store/store"
import PackagesContent from "./packagesContent"
import { H1 } from "../typography/H1"
import PackagesButtonGroup from "./packagesButtonGroup"
import { bitPackageData } from "@/data/packagesData/bitPackageData"
import { megabitPackageData } from "@/data/packagesData/megabitPackageData"
import { gigabitPackageData } from "@/data/packagesData/gigabitPackageData"
export default function PackagesSection(){
    const currentPackage = useTogglingStore((state:any)=> state.currentPackage)
    const settingPackageData = () =>{
        let packageData = {}
        if(currentPackage === "bit"){   
            packageData = bitPackageData
            
        }


        if(currentPackage === "megabit"){
            packageData = megabitPackageData
            
        }

        if(currentPackage === "gigabit"){
            packageData = gigabitPackageData
            
        }

        return packageData
    }
    const packageData = settingPackageData()
    return<>
   <div className="bg-background">
   <PackagesButtonGroup></PackagesButtonGroup>
    <PackagesContent packageData = {packageData}></PackagesContent>
   </div>
    
    
    </>
    
    
}