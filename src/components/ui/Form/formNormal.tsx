"use client";
import SubmitButton from "../submitButton";
import { useFormState } from "react-dom";
import { formSubmission } from "@/server-actions";
import { useTogglingStore } from "@/store/store";
import { useRef } from "react";
export default function FormNormal() {
  const nameRef: any = useRef(null);
  const [state, formAction] = useFormState(formSubmission, "nothing now");
  const changeCurrentFormState = useTogglingStore(
    (state: any) => state.changeCurrentFormState
  );

  const changeCurrentClientName = useTogglingStore(
    (state: any) => state.changeCurrentClientName
  );

  if (state?.message === "success") {
    changeCurrentClientName(nameRef.current.value);
    changeCurrentFormState("dummySuccess");
  }

  if (state?.message === "failure") {
    changeCurrentFormState("dummyFailure");
  }

  return (
    <>
      <form
        action={formAction}
        className="w-full flex-col justify-center items-center"
      >
        {/* email and name div */}
        <div className="flex flex-col w-full TABLET:flex-row TABLET:gap-[7.875rem]">
          <div className="flex flex-col text-Mobile-S-Heading w-full outline-none mt-[11.44%] TABLET:mt-[0rem] TABLET:w-[240px] SMALL_LAPTOP:w-[50%]">
            <label
              htmlFor="name"
              className="font-medium TABLET:text-Tablet-Large-Text "
            >
              Name
            </label>
            <input
              required
              ref={nameRef}
              type="text"
              name="name"
              className="w-full border-b-2 bg-transparent dark:border-b-white border-b-black outline-none"
            />
          </div>

          <div className="flex flex-col text-Mobile-S-Heading w-full outline-none mt-[11.44%] TABLET:w-[240px] TABLET:mt-[0rem] SMALL_LAPTOP:w-[50%]">
            <label
              htmlFor="email"
              className="font-medium TABLET:text-Tablet-Large-Text"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="w-full border-b-2 bg-transparent dark:border-b-white border-b-black outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col text-Mobile-S-Heading w-full outline-none mt-[11.44%] TABLET:w-[610px] TABLET:my-[3rem] TABLET:mb-[7rem] SMALL_LAPTOP:w-full">
          <label
            htmlFor="message"
            className="font-medium TABLET:text-Tablet-Large-Text"
          >
            Message
          </label>
          <textarea
            name="message"
            className="w-full border-b-2 bg-transparent dark:border-b-white border-b-black outline-none pt-[1rem] "
          />
        </div>
        {/* <div className="pt-[3rem] flex justify-center TABLET:justify-start  w-full TABLET:mt-[0rem]  ">
          <button
            type="submit"
            // onSubmit={submitHandler}
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
        </div> */}
        <SubmitButton></SubmitButton>
      </form>
    </>
  );
}
