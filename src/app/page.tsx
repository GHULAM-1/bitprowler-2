import ServicesSection from "@/components/home/ServicesSection";
import PackagesSection from "@/components/home/packagesSection";
import HeroSection from "../components/home/heroSection";
import ContactusSection from "@/components/home/contactusSection";
import Footer from "@/components/ui/footer";
import CustomersSection from "@/components/ui/customersSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PackagesSection />
      {/* <CustomersSection /> */}
      <ContactusSection />
      <Footer />
    </>
  );
}
