
import ServicesMainHeading from "@/components/servicesStuff/servicesMainHeading"
import WebContent from "@/components/servicesStuff/webContent"
import DeliverablesSection from "@/components/servicesStuff/deliverablesSection"
import { webPills } from "@/data/servicesData/servicesPillsData"
import MeetSection from "@/components/servicesStuff/meetSection"
import Image from "next/image"
export default function WebDev() {
    return <>


        <div>

            <ServicesMainHeading>
                    Web Dev
                </ServicesMainHeading>
            <div className="mt-[4rem]  bg-background">

                
                <Image
                        src="/mockups/web-no-bg.png"
                        width={1900}
                        height={300}
                        alt="Picture of the author"
                        className=""
                    />
                

                <WebContent></WebContent>

                <DeliverablesSection deliverablesData={webPills}></DeliverablesSection>
                <MeetSection></MeetSection>
            </div>


        </div>

    </>


}   