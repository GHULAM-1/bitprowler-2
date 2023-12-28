import Image from "next/image";
import SolidDotSVG from "~/solidDotSVG";
import SolidBSVG from "~/solibBSVG";
type TeamMemberProps = {
  name: string;
  pic: string;
};

export default function TeamMember({ name, pic }: TeamMemberProps) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-full cursor-pointer group">
        <div className=" SMALL_LAPTOP:bg-[#DBDBDB] SMALL_LAPTOP:group-hover:bg-themeColor transition-all ease-linear bg-primary border-2 border-[#343333] rounded-[1rem] relative  flex mb-[1rem] w-full aspect-[3/4] overflow-hidden bg-themeColor  ">
          <SolidBSVG className="absolute bottom-0 z-10 w-[86%] h-[84%] fill-white rounded-b-[1rem] -left-5  "></SolidBSVG>
          <SolidDotSVG className="absolute z-10 bottom-0 right-0 h-[18.3%] w-[25.6%]  fill-white rounded-b-[1rem] "></SolidDotSVG>

          <Image
            src={pic}
            layout="responsive"
            width={270}
            height={300}
            alt={name}
            className="relative z-20 SMALL_LAPTOP:grayscale SMALL_LAPTOP:group-hover:grayscale-0  "
          />
        </div>

        <div className="flex w-full  justify-center TABLET:justify-start ">
          <div className="mb-[3rem] text-Mobile-Head dark:text-white text-black font-medium  TABLET:text-Tablet-Large-Text">
            {name}
          </div>
        </div>
      </div>
    </>
  );
}
