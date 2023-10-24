import PackagesCard from "./packagesSectionCard"
export default function PackagesSection() {
    return <>

        <div className="box-with-100vw-width flex flex-col justify-center items-center bg-background pt-[5rem]">


            <div className="main-div w-[77%] flex flex-col items-start">
                <div className="heading text-heading">
                    Packages
                </div>
                <div className="description text-large-text w-[70%] mb-[2rem]">
                    View our carefully crafted packages to elevate your digital experiences one bit at a time
                </div>


                {/* // cards */}


                <PackagesCard></PackagesCard>



            </div>



        </div>
    </>
}