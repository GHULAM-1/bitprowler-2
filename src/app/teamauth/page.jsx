"use client";
import { useTogglingStore } from "@/store/store";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Teamauth() {
  const inputRef = useRef(null);
  const router = useRouter();
  const changeMemberStatus = useTogglingStore(
    (state) => state.changeMemberStatus
  );
  const isTeamMember = useTogglingStore((state) => state.isTeamMember);

  const handleClick = () => {
    const currentPassword = inputRef.current.value;
    console.log(currentPassword);
    changeMemberStatus();
    console.log(isTeamMember);
    console.log("team main ho");
    if (currentPassword === "donkey") {
      router.push("/studio");
    } else {
      alert("password not correct try again!!! ");
    }
  };

  return (
    <>
      <div className="w-screen gap-[2rem] h-screen flex flex-col justify-center items-center">
        <div className="flex gap-[1rem]">
          <label htmlFor="password">Password : </label>
          <input type="password" ref={inputRef} name="password" className="" />
        </div>
        <button
          onClick={handleClick}
          className="bg-themeColor px-[2rem] py-[1rem] border-0 rounded-xl"
        >
          submit
        </button>
      </div>

     
    </>
  );
}
