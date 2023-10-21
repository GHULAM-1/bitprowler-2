
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
            <div className="mt-[0rem]  bg-background flex flex-col justify-center items-center">

                
                <Image
                        src="/mockups/app-no-bg.png"
                        width={900}
                        height={0}
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