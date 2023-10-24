"use client";
import ServicesSection from "./(components)/servicesSection/ServicesSection";
import PackagesSection from "./(components)/packagesSection/packagesSection";
import HeroSection from "./(components)/heroSection/heroSection";
import ContactusSection from "./(components)/contactusSection/contactusSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ServicesSection />
      <PackagesSection></PackagesSection>
      <ContactusSection></ContactusSection>
    </>
  );
}
