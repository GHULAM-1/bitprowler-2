
import ServicesMainHeading from "@/components/servicesStuff/servicesMainHeading"
import MarketingContent from "@/components/servicesStuff/marketingContent"
import DeliverablesSection from "@/components/servicesStuff/deliverablesSection"
import { marketingPills } from "@/data/servicesData/servicesPillsData"
import MeetSection from "@/components/servicesStuff/meetSection"
import Image from "next/image"
export default function Marketing() {
    return <>


        <div>

            <ServicesMainHeading>
                    Marketing
                </ServicesMainHeading>
            <div className="mt-[4rem]  bg-background">

                
                <Image
                        src="/mockups/marketing-no-bg.png"
                        width={1900}
                        height={300}
                        alt="Picture of the author"
                        className=""
                    />
                

                <MarketingContent></MarketingContent>

                <DeliverablesSection deliverablesData={marketingPills}></DeliverablesSection>
                <MeetSection></MeetSection>
            </div>


        </div>

    </>


}