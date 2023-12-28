"use client";
import FormFailure from "./FormFailure";
import FormSuccess from "./FormSuccess";
import { useTogglingStore } from "@/stores/togglingStore";
import FormNormal from "./formNormal";

export default function Form() {
  const currentFormState = useTogglingStore(
    (state: any) => state.currentFormState
  );

  return (
    <div id="contact">
      <>
        {currentFormState === "dummySuccess" ? (
          <FormSuccess />
        ) : currentFormState === "dummyFailure" ? (
          <FormFailure />
        ) : (
          <FormNormal />
        )}
      </>
    </div>
  );
}
