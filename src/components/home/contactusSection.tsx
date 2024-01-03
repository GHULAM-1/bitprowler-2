import Form from "@/components/ui/Form";
export default function ContactusSection() {
  return (
    <>
      <div className="pt-[25.5%] phone  flex w-screen TABLET:pt-[10rem] flex-col px-[8.65%] justify-center  items-center SMALL_LAPTOP:hidden ">
        <div className="top flex items-center flex-col mb-[10.7%] w-full TABLET:items-start TABLET:gap-[1rem] TABLET:mb-[7.25rem]">
          <div className="text-Mobile-L-Head TABLET:text-Tablet-Head  ">
            Contact
          </div>
          <div className="text-Mobile-S-Heading font-medium TABLET:text-Tablet-Text ">
            team@bitprowler.com
          </div>
        </div>

        <Form />

        <div className="bottom  my-[9.30%] TABLET:mt-[4rem]  w-full flex flex-col justify-center items-center TABLET:items-start ">
          <div className="text-Mobile-S-Heading font-medium TABLET:text-Tablet-Text TABLET:mb-[0.5rem] ">
            Lahore,Pakistan
          </div>
          <div className="text-Mobile-Text TABLET:text-Tablet-Text">
            0323-4896676
          </div>
        </div>
      </div>

      {/* laptops */}
      <div className="hidden SMALL_LAPTOP:flex flex-row   justify-center w-screen items-center mb-[10rem] mt-[5rem] px-[8%] max-w-screen-LARGE_LAPTOP">
        <div className="left w-[50%]  h-full flex flex-col justify-between gap-[15rem]">
          <div className="left-top ">
            <div className="clamp-service-section-main-heading mb-[0.5rem] SMALL_LAPTOP:text-SMALL_LAPTOP-Heading">
              Contact
            </div>
            <div className="SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text">
              team@bitprowler.com
            </div>
          </div>
          <div className="left-bottom">
            <div className="SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text">
              Lahore,Pakistan
            </div>
            <div className="SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text">
              (+92)0323-4896676
            </div>
          </div>
        </div>
        <div className="right w-[50%]  h-full ">
          <Form />
        </div>
      </div>
    </>
  );
}
