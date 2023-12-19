import ServicesSection from "../components/home/ServicesSection";
import PackagesSection from "../components/home/packagesSection";
import HeroSection from "../components/home/heroSection";
import Contactus from "../components/home/contactusSection";
import LongBottom from "@/components/ui/longBottom";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PackagesSection />
      <Contactus />
      <LongBottom />
    </>
  );
}
