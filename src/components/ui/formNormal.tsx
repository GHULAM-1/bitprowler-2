"use client";
import SubmitButton from "./submitButton";
import { useFormState } from "react-dom";
import { formSubmission } from "@/serverActions/server-actions";
import { useTogglingStore } from "@/stores/togglingStore";
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
        className="w-full flex-col justify-center items-center  "
      >
        {/* email and name div */}
        <div className="flex  flex-col w-full TABLET:flex-row TABLET:gap-[7.875rem]">
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
        <SubmitButton></SubmitButton>
      </form>
    </>
  );
}
