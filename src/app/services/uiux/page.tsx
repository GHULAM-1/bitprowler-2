
import ServicesMainHeading from "@/components/servicesStuff/servicesMainHeading"
import UxContent from "@/components/servicesStuff/uxContent"
import DeliverablesSection from "@/components/servicesStuff/deliverablesSection"
import { uxPills } from "@/data/servicesData/servicesPillsData"
import MeetSection from "@/components/servicesStuff/meetSection"
import Image from "next/image"
export default function Uiux() {
    return <>


        <div>

            <ServicesMainHeading>
                    UX design
                </ServicesMainHeading>
            <div className="mt-[4rem]  bg-background">

                
                <Image
                        src="/mockups/ux.svg"
                        width={1900}
                        height={300}
                        alt="Picture of the author"
                        className=""
                    />
                

                <UxContent></UxContent>

                <DeliverablesSection deliverablesData={uxPills}></DeliverablesSection>
                <MeetSection></MeetSection>
            </div>


        </div>

    </>


}