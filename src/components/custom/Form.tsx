"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import TransitionInput from "./transitionInput";
import { CloudCog } from "lucide-react";
export default function Form() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <>
      {pending ? <div>LOADING .....</div> : <TransitionInput></TransitionInput>}
    </>
  );
}
