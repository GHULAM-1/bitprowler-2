
import ServicesMainHeading from "@/components/servicesStuff/servicesMainHeading"
import SecurityContent from "@/components/servicesStuff/securityContent"
import DeliverablesSection from "@/components/servicesStuff/deliverablesSection"
import { securityPills } from "@/data/servicesData/servicesPillsData"
import MeetSection from "@/components/servicesStuff/meetSection"
import Image from "next/image"
export default function Security() {
    return <>


        <div>

            <ServicesMainHeading>
                    Cyber Security
                </ServicesMainHeading>
            <div className="mt-[4rem]  bg-background">

                
                <Image
                        src="/mockups/security.svg"
                        width={1900}
                        height={10}
                        alt="Picture of the author"
                        className=""
                    />
                

                <SecurityContent></SecurityContent>

            <DeliverablesSection deliverablesData={securityPills}></DeliverablesSection>
                <MeetSection></MeetSection>
            </div>


        </div>

    </>


}