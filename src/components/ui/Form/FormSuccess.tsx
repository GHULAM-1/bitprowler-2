import { useTogglingStore } from "@/store/store";
import ButtonArrowSVG from "../../../../public/buttonArrowSVG";
export default function FormSuccess() {
  const changeCurrentFormState = useTogglingStore(
    (state: any) => state.changeCurrentFormState
  );
  const currentClientName = useTogglingStore(
    (state: any) => state.currentClientName
  );
  const handleClick = () => {
    changeCurrentFormState("default");
  };
  return (
    <>
      <div className="flex justify-center flex-col text-center gap-[2rem] text-Mobile-Text TABLET:justify-start TABLET:items-start TABLET:text-left TABLET:text-Tablet-Text LAPTOP:text-SMALL_LAPTOP-L-Text ">
        <div className="">
          Thank you ,
          <span className="text-themeColor font-bold whitespace-nowrap ">
            {" "}
            {currentClientName}!{" "}
          </span>
          We've received your message and will get back to you as soon as
          possible. In the meantime, feel free to explore more on our website.
        </div>

        <button
          className="py-[1rem] px-[2rem] gap-[0.5rem] bg-themeColor rounded-[8px] text-Mobile-S-Heading flex items-center justify-center"
          onClick={handleClick}
        >
          <ButtonArrowSVG className="w-[30px] rotate-180 dark:fill-[white] fill-black"></ButtonArrowSVG>
          back
        </button>
      </div>
    </>
  );
}
