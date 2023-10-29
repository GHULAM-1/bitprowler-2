import Image from "next/image";
import SolidDotSVG from "../../../../public/solidDotSVG";
import solidBSVG from "../../../../public/solibBSVG";
import SolidBSVG from "../../../../public/solibBSVG";
type TeamMemberProps = {
  name: string;
  pic: string;
};

export default function TeamMember({ name, pic }: TeamMemberProps) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-full ">
        <div className=" bg-primary border-2 border-[#DBDBDB] rounded-[1rem] relative h-[400px] flex mb-[1rem] w-[300px]">
          <SolidBSVG className="absolute bottom-0 z-10 w-[258px] h-[336px] fill-white rounded-b-[1rem]"></SolidBSVG>
          <SolidDotSVG className="absolute z-10 bottom-0 right-0 h-[73.5px] w-[77px]  fill-white rounded-b-[1rem]"></SolidDotSVG>
          <Image
            src={pic}
            width={270}
            height={300}
            alt="Picture of the author"
            className="relative z-20"
          />
        </div>

        <div className="mb-[3rem] text-Mobile-Head dark:text-white text-black font-medium">
          {name}
        </div>
      </div>
    </>
  );
}
