
import ServicesMainHeading from "@/components/servicesStuff/servicesMainHeading"
import AppContent from "@/components/servicesStuff/appContent"
import DeliverablesSection from "@/components/servicesStuff/deliverablesSection"
import { appPills } from "@/data/servicesData/servicesPillsData"
import MeetSection from "@/components/servicesStuff/meetSection"
import Image from "next/image"
export default function AppDev() {
    return <>


        <div>

            <ServicesMainHeading>
                    App Dev
                </ServicesMainHeading>
            <div className="mt-[4rem]  bg-background">

                
                <Image
                        src="/mockups/app.svg"
                        width={1900}
                        height={1200}
                        alt="Picture of the author"
                        className=""
                    />
                

                <AppContent></AppContent>

                <DeliverablesSection deliverablesData={appPills}></DeliverablesSection>
                <MeetSection></MeetSection>
            </div>


        </div>

    </>


}