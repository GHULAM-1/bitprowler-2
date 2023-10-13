export default function ServicesMainHeading({children}:any){
    return <>

            <div className="text-[5.5rem] font-normal flex justify-start items-center gap-[2rem] ml-[3rem] mt-[5rem] mb-[0rem] clamp-48px ">


                <div >
                        Services
                </div>


                <div className="clamp-width-48px clamp-height-48px bg-black
                dark:bg-white rounded-full"></div>




                <div>
                    {children}
                </div>

                
            </div>

    </>
}