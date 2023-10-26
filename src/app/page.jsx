"use client";

import ServicesSection from "./(components)/servicesSection/ServicesSection";
import PackagesSection from "./(components)/packagesSection/packagesSection";
import HeroSection from "./(components)/heroSection/heroSection";
import ContactusSection from "./(components)/contactusSection/contactusSection";

import LongBottom from "@/components/custom/longBottom";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col items-center justify-center">
        <HeroSection></HeroSection>
        <ServicesSection />
        <PackagesSection></PackagesSection>
        <LongBottom></LongBottom>
        {/* <ContactusSection></ContactusSection> */}
      </div>
    </>
  );
}
