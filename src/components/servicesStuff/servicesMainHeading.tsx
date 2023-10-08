export default function ServicesMainHeading({children}:any){
    return <>

            <div className="text-[5.5rem] font-normal flex justify-start items-center gap-[2rem] ml-[3rem] mt-[8rem] mb-[5rem]">


                <div >
                        Services
                </div>


                <div className="w-4 h-4 bg-white rounded-full"></div>




                <div>
                    {children}
                </div>

                
            </div>

    </>
}