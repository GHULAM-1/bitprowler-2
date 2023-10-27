"use client";

import ServicesSection from "./(components)/servicesSection/ServicesSection";
import PackagesSection from "./(components)/packagesSection/packagesSection";
import HeroSection from "./(components)/heroSection/heroSection";
import Contactus from "./(components)/contactusSection/contactusSection";

import LongBottom from "@/components/custom/longBottom";
import BigCTA from "@/components/custom/bigCTA";
export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col items-center justify-center">
        <HeroSection></HeroSection>
        <ServicesSection />
        <PackagesSection></PackagesSection>
        <Contactus></Contactus>
        {/* <BigCTA></BigCTA> */}
        {/* <LongBottom></LongBottom> */}
      </div>
    </>
  );
}
