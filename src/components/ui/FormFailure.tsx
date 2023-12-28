'use client'
import { useTogglingStore } from "@/stores/togglingStore";
export default function FormFailure() {
  const changeCurrentFormState = useTogglingStore(
    (state: any) => state.changeCurrentFormState
  );
  const handleClick = () => {
    changeCurrentFormState("default");
  };
  return (
    <>
      <div className="flex justify-center flex-col text-center gap-[2rem] text-Mobile-Text TABLET:justify-start TABLET:items-start TABLET:text-left TABLET:text-Tablet-Text LAPTOP:text-SMALL_LAPTOP-L-Text ">
        <div className="">
          Something went wrong! Check your internet Connection and try again
        </div>

        <button
          className="py-[1rem] px-[2rem] gap-[0.5rem] bg-themeColor rounded-[8px] text-Mobile-S-Heading flex items-center justify-center"
          onClick={handleClick}
        >
          try again
        </button>
      </div>
    </>
  );
}
