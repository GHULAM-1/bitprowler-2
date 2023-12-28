import { teamContent } from "@/data/aboutus/teamContent";
import TeamMember from "./teamMember";
export default function TeamSection() {
  return (
    <>
      <div className=" px-[15.11%] SMALL_LAPTOP:px-[4.5rem]   flex flex-col justify-center items-center h-full TABLET:items-start">
        <div className="text-Mobile-L-Head mb-[11%] TABLET:mb-[5%] TABLET:text-Tablet-Head ">
          Team
        </div>
        <div className="grid grid-cols-1 justify-center justify-items-center w-full TABLET:grid-cols-2 SMALL_LAPTOP:grid-cols-4 h-full gap-x-[2rem] ">
          {teamContent.map((member) => {
            return (
              <>
                <TeamMember
                  name={member.name}
                  pic={member.imagePath}
                  key={member.id}
                ></TeamMember>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
