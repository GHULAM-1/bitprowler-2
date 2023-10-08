import { H2 } from "../typography/H2"
import PackagesTableRow from "./packagesTableRow"
export default function PackagesContent({
    packageData
}: any) {
    return <>
        <div className="flex flex-col justify-center items-center">
            {packageData.servicesIncluded.map((item:any , index:number)=> {
                return (
                    
                    <PackagesTableRow mainService = {item.mainService}  deliverables =  {item.Deliverables} index = {index}></PackagesTableRow>
                )
            })}
           
        </div>

    </>
}