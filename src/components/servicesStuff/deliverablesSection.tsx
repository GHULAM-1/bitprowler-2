import { H1 } from "../typography/H1";
import ServicesPills from "./servicesPills";
export default function DeliverablesSection({deliverablesData}:any){
    return <>
      <div className="flex justify-center items-center mt-[5rem]">



      <div className="flex bg-background w-[60%] flex-wrap justify-start items-center">
                <div className= "text-[4rem] mb-[3.5rem]">Delivrables</div>

                <div className="bg-background flex flex-wrap justify-start items-center ">

                    {deliverablesData.map((item:any)=> {
                        return <>
                                <ServicesPills>{item}</ServicesPills>
                        </>
                    })}


                </div>


        </div>



      </div>
    
    </>
}