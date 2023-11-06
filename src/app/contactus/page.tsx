"use client";
import ContactusSection from "../(components)/contactusSection/contactusSection";
import LongBottom from "@/components/custom/longBottom";
import { useTogglingStore } from "@/store/store";

export default function ContactPage() {
  const isNavOpen = useTogglingStore((state: any) => state.isNavOpen);

  return (
    <>
      <div
        className={`overflow-x-hidden flex flex-col items-center justify-center absolute z-40  ${
          isNavOpen === true ? "hidden overscroll-none" : null
        }`}
      >
        <div className="pt-[5.5rem] w-full">
          <ContactusSection></ContactusSection>
          <LongBottom></LongBottom>
        </div>
      </div>
    </>
  );
}
