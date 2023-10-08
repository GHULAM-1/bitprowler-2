import { Button } from "../ui/button"
import Link from "next/link"
export default function MeetSection(){
    return <>
        <div className="flex justify-center items-center flex-col py-[14rem]">

            <div className="text-[80px] font-normal">
            Let’s work togather
            </div>

           <Link href = "/contact">
           <Button className="px-[4rem] py-[2rem] font-black text-[1.2rem] flex justify-center items-center mt-[2rem] hover:bg-primary" >Book a Meet</Button>
           </Link>
        </div>
    
    </>
}