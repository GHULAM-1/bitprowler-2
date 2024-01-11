import BitprowlerText from "@/components/ui/bitprowlerText";
export default function BlogLastSection() {
  return (
    <>
      <div className="flex w-full  mt-14 TABLET:pt-40 LAPTOP:pb-40 pb-8">
        <div className="LAPTOP:w-1/2 w-full flex flex-col text-left gap-4 items-center TABLET:items-start  ">
          <div className="text-SMALL_LAPTOP-S-Subheading TABLET:text-SMALL_LAPTOP-M-Subheading font-medium TABLET:max-w-[576px] ">
            Ready to take your digital presence to the
            <span className="text-themeColor">next </span> level?
          </div>
          <div className="text-Mobile-Text TABLET:text-Mobile-S-Heading SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text TABLET:max-w-[666px] ">
            Bit Prowler offers Tailored startup packages and services for
            seamless digital growth and unparalleled success.
          </div>
        </div>
        <div className=" items-center justify-end  w-1/2 hidden LAPTOP:flex ">
          <BitprowlerText></BitprowlerText>
        </div>
      </div>
    </>
  );
}
