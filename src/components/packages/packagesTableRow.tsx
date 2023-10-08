import { Divide } from "lucide-react"


export default function PackagesTableRow({ mainService, deliverables , index }: any) {
    return <>


       <div>






       <div className=" flex pl py-[0.5rem] w-[72vw] rounded gap-[3rem] mb-[0.0rem]">
            <div className="flex font-black text-lg w-[10rem] min-w-[160px] ml-[0.5rem] items-center">{mainService}</div>

            <div className="flex  items-center flex-wrap">

                {deliverables.map((deliverable: any) => {
                    return (
                        <div className="border-[1px] rounded border-slate-700 px-[2rem] py-[1rem] whitespace-nowrap ml-[0.5rem] mb-[0.5rem]">{deliverable}</div>

                    )
                })}
            </div>
            

        </div>


            




       </div>


    </>
}

