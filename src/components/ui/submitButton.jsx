import ButtonArrowSVG from "../../../public/buttonArrowSVG";

import { useFormStatus } from "react-dom";
export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="pt-[3rem] flex justify-center TABLET:justify-start  w-full TABLET:mt-[0rem]  ">
        <button
          type="submit"
          disabled={pending}
          className="   px-[2rem] py-[1rem]   flex gap-[0.5rem] justify-center items-center bg-themeColor rounded-[48px]  TABLET:py-[1rem] TABLET:px-[2rem]  dark:text-white text-black text-Mobile-S-Text TABLET:text-Tablet-Large-Text     SMALL_LAPTOP:bg-transparent SMALL_LAPTOP:px-0 SMALL_LAPTOP:py-0 group SMALL_LAPTOP:hover:bg-themeColor SMALL_LAPTOP:hover:px-[2rem] SMALL_LAPTOP:hover:py-[1rem]   SMALL_LAPTOP:transition-all SMALL_LAPTOP:ease-linear "
        >
          {pending ? "Submitting ..." : "Submit"}
          <ButtonArrowSVG
            className={`dark:fill-white fill-black w-[24px] TABLET:w-[56px] ${
              pending ? "hidden" : "flex"
            }`}
          ></ButtonArrowSVG>
        </button>
      </div>
    </>
  );
}
