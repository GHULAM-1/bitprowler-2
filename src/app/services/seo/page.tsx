
import ServicesMainHeading from "@/components/servicesStuff/servicesMainHeading"
import SeoContent from "@/components/servicesStuff/seoContent"
import DeliverablesSection from "@/components/servicesStuff/deliverablesSection"
import { seoPills } from "@/data/servicesData/servicesPillsData"
import MeetSection from "@/components/servicesStuff/meetSection"
import Image from "next/image"
export default function Seo() {
    return <>


        <div>

            <ServicesMainHeading>
                    SEO
                </ServicesMainHeading>
            <div className="mt-[4rem]  bg-background">

                
                <Image
                        src="/mockups/seo-no-bg.svg"
                        width={1900}
                        height={300}
                        alt="Picture of the author"
                        className=""
                    />
                

                <SeoContent></SeoContent>

                <DeliverablesSection deliverablesData={seoPills}></DeliverablesSection>
                <MeetSection></MeetSection>
            </div>


        </div>

    </>


}