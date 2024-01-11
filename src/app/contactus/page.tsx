import ContactusSection from "@/components/home/contactusSection";
import Footer from "@/components/ui/footer";
export const metadata = {
  title: "Contact",
  description: "bitprowler contact us page",
};
export default function ContactPage() {
  return (
    <>
      <div className="  w-full h-screen flex justify-between items-center flex-col ">
        <div className="pt-[4.5rem]">
          <ContactusSection />
        </div>
        <div className="  w-full ">
          <Footer />
        </div>
      </div>
    </>
  );
}
