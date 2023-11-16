"use client";
import ServicesSection from "./(components)/servicesSection/ServicesSection";
import PackagesSection from "./(components)/packagesSection/packagesSection";
import HeroSection from "./(components)/heroSection/heroSection";
import Contactus from "./(components)/contactusSection/contactusSection";
import LongBottom from "@/components/custom/longBottom";
import { useTogglingStore } from "@/store/store";
export default function Home() {
  const isNavOpen = useTogglingStore((state: any) => state.isNavOpen);
  return (
    <>
      <div
        className={`overflow-x-hidden flex flex-col items-center justify-center absolute z-40  ${
          isNavOpen === true ? "hidden overscroll-none" : null
        }`}
      >
        <HeroSection></HeroSection>
        <ServicesSection />
        <PackagesSection></PackagesSection>
        <Contactus></Contactus>
        <LongBottom></LongBottom>
      </div>
    </>
  );
}
