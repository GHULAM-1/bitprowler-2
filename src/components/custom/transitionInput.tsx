"use client";
// @ts-ignore

import SubmitButton from "./submitButton";
import { formSubmission } from "@/server-actions";
import { useFormState } from "react-dom";
import { useRef, useState } from "react";
import FormFailure from "./Form/FormFailure";
import FormSuccess from "./Form/FormSuccess";

import { redirect } from "next/navigation";
import Link from "next/link";
import { useTogglingStore } from "@/store/store";
import FormNormal from "./Form/formNormal";

export default function TransitionInput() {
  const currentFormState = useTogglingStore(
    (state: any) => state.currentFormState
  );

  return (
    <div id="contact">
      <>
        {currentFormState === "dummySuccess" ? (
          <FormSuccess></FormSuccess>
        ) : currentFormState === "dummyFailure" ? (
          <FormFailure></FormFailure>
        ) : (
          <FormNormal></FormNormal>
        )}
      </>
    </div>
  );
}
// <div className="container  text-black flex-col justify-center items-center text-Mobile-S-Heading w-ful">
//   <form className="w-full">
//     <div className="laptop_lg:flex overflow-hidden laptop_lg:gap-[0.5rem] w-full ">
//       <div className="w-full bg-orange-500 form-group laptop_lg:w-[50%]">
//         <input
//           type="text"
//           required
//           className=" bg-red-400 border-b-black dark:border-b-white dark:text-white text-black border-4"
//         />
//         {/* <span className="highlight"></span> */}
//         {/* <span className="bar"></span> */}
//         <label className="text-black dark:text-white text-Mobile-S-Heading font-medium mb-[4%] w-full bg-green-600">
//           Name
//         </label>
//       </div>

//       <div className="form-group laptop_lg:w-[50%]">
//         <input
//           type="text"
//           required
//           className="dark:text-white text-black dark:border-b-white border-b-black border-4"
//         />
//         <span className="highlight"></span>
//         <span className="bar"></span>
//         <label className="text-black dark:text-white text-Mobile-S-Heading font-medium">
//           Email
//         </label>
//       </div>
//     </div>

//     <div className="form-group laptop_lg:mt-[3rem]">
//       <input
//         type="text"
//         required
//         bg-background
//         className="dark:text-white text-black border-b-black dark:border-b-white border-4"
//       />
//       <span className="highlight"></span>
//       <span className="bar"></span>
//       <label className="text-black dark:text-white text-Mobile-S-Heading font-medium">
//         Message
//       </label>
//     </div>

//     <div className="flex justify-center w-full">
//       <button className="flex justify-center items-center bg-primary rounded-[5rem] py-[1rem] px-[1.5rem] dark:text-white text-black text-Mobile-S-Text">
//         submit {"-->"}
//       </button>
//     </div>
//   </form>
// </div>;
