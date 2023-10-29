import { teamContent } from "../data/teamContent";
import TeamMember from "./teamMember";
export default function TeamSection() {
  return (
    <>
      <div className="mx-[15.11%]  flex flex-col justify-center items-center ">
        <div className="text-Mobile-L-Head mb-[11%]">Team</div>
        <div className="grid grid-cols-1 justify-center justify-items-center w-full">
          {teamContent.map((member, index) => {
            return (
              <>
                <TeamMember
                  name={member.name}
                  pic={member.imagePath}
                  key={index}
                ></TeamMember>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
