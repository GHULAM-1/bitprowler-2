export default function ServicesPageExplanation() {
  return (
    <>
      <div className=" flex flex-col   ">
        <div className="first-div grid grid-cols-2 px-[4rem] w-screen h-screen pt-[8rem]  ">
          <div className="left ">
            <div className="main-heading text-[4.5rem] font-poppins">
              Why Ux Design?
            </div>
          </div>
          <div className="right flex flex-col gap-[4rem]  items-center mt-[4rem] ">
            <div className="right-1 flex flex-col  w-[70%]">
              <div className="heading text-[3rem]">Increased Conversions</div>
              <div className="description text-text flex flex-col ">
                Lorem ipsum dolor sit amet consectetur. Justo semper libero
                integer blandit tempus eu sit vel.
              </div>
            </div>
            <div className="right-2 w-[70%]">
              <div className="heading text-[3rem]">Competitive Advantage</div>
              <div className="description text-text flex flex-col">
                Lorem ipsum dolor sit amet consectetur. Justo semper libero
                integer blandit tempus eu sit vel.
              </div>
            </div>
            <div className="right-3 w-[70%]">
              <div className="heading text-[3rem]">Data-Driven Decisions</div>
              <div className="description text-text flex flex-col ">
                Lorem ipsum dolor sit amet consectetur. Justo semper libero
                integer blandit tempus eu sit vel.
              </div>
            </div>
          </div>
        </div>

        {/* kl? */}

        <div className="second-div flex flex-col px-[4rem] w-screen h-screen pt-[3rem]  ">
          <div className="left ">
            <div className="main-heading text-[4.5rem] font-poppins flex mb-[2rem] ">
              Our Approach
            </div>
          </div>
          <div className="right flex flex-col gap-[4rem]  items-center mt-[4rem] justify-center ">
            <div className="right-1 flex flex-col  w-[45%]">
              <div className="heading text-[3rem]">Increased Conversions</div>
              <div className="description text-text flex flex-col ">
                Lorem ipsum dolor sit amet consectetur. Justo semper libero
                integer blandit tempus eu sit vel.
              </div>
            </div>
            <div className="right-2 w-[45%]">
              <div className="heading text-[3rem]">Competitive Advantage</div>
              <div className="description text-text flex flex-col">
                Lorem ipsum dolor sit amet consectetur. Justo semper libero
                integer blandit tempus eu sit vel.
              </div>
            </div>
            <div className="right-3 w-[45%]">
              <div className="heading text-[3rem]">Data-Driven Decisions</div>
              <div className="description text-text flex flex-col ">
                Lorem ipsum dolor sit amet consectetur. Justo semper libero
                integer blandit tempus eu sit vel.
              </div>
            </div>
          </div>
        </div>

        <div className="third-div flex justify-center  items-center bg-black dark:bg-white text-white dark:text-black w-screen h-screen text-heading ">
          <div className="text-primary">
            <span className="text-black">"UX is</span> effective
            <span className="text-black">."</span>
          </div>
        </div>
      </div>
    </>
  );
}
