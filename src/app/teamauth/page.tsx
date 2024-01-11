"use client";
import { useTogglingStore } from "@/stores/togglingStore";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Metadata } from "next";

export default function Teamauth() {
  const inputRef: any = useRef(null);
  const router = useRouter();
  const changeMemberStatus = useTogglingStore(
    (state: any) => state.changeMemberStatus
  );
  const isTeamMember = useTogglingStore((state: any) => state.isTeamMember);

  const handleClick = () => {
    const currentPassword = inputRef.current.value;

    if (currentPassword === "donkey") {
      changeMemberStatus();
      router.push("/studio");
    } else {
      alert("password not correct try again!!! ");
    }
  };

  return (
    <>
      <div className="w-screen gap-[2rem] h-screen  flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center flex-col gap-[2rem] ">
          <div className="font-medium text-Mobile-Text TABLET:text-Tablet-Large-Text ">
            BitProwler <span className="text-themeColor">Admin</span>
            Authorization
          </div>
          <div className="flex TABLET:flex-row flex-col gap-[1rem] items-center TABLET:px-[1rem]">
            <label
              htmlFor="password"
              className="font-medium TABLET:text-Tablet-Text"
            >
              Password :
            </label>
            <input
              type="password"
              ref={inputRef}
              name="password"
              className="py-[1rem] bg-transparent outline-none  font-extrabold TABLET:text-Tablet-Large-Text text-[1rem] border-b-[1px] border-b-gray-800 "
            />
          </div>
          <button
            onClick={handleClick}
            className="font-medium bg-themeColor px-[2rem] py-[1rem]  rounded-[1rem]"
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
}
