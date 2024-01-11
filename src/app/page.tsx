import ServicesSection from "@/components/home/ServicesSection";
import PackagesSection from "@/components/home/packagesSection";
import HeroSection from "../components/home/heroSection";
import ContactusSection from "@/components/home/contactusSection";
import Footer from "@/components/ui/footer";
import { Metadata } from "next";
import CustomersSection from "@/components/ui/customersSection";
import { homeMetadata } from "@/config/metaData";
export const metadata: Metadata = {
  description: homeMetadata.description,
};
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <HeroSection />
        <ServicesSection />
        <PackagesSection />
        <div className="mt-28 TABLET:mt-0">
          <CustomersSection />
        </div>
        <ContactusSection />
        <Footer />
      </div>
    </>
  );
}
