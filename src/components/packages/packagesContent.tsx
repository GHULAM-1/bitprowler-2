import { H1 } from "../typography/H1"
import { H2 } from "../typography/H2"
import { H3 } from "../typography/H3"
import { H4 } from "../typography/H4"
import PackagesTableRow from "./packagesTableRow"
import { P } from "../typography/P"
export default function PackagesContent({
    packageData
}: any) {
    return <>
<div>


            




<div className="flex flex-col justify-center items-center">


<div className="flex justify-center items-center flex-col gap-[1rem] mb-[1rem] ">

</div>

            {packageData.servicesIncluded.map((item:any , index:number)=> {
                return (<>
                    
                    <PackagesTableRow mainService = {item.mainService}  deliverables =  {item.Deliverables} index = {index}></PackagesTableRow>
                    </>
                )
            })}
           
        </div>
</div>

    </>
}