import ContactusSection from "@/components/home/contactusSection";
import Footer from "@/components/ui/footer";

export default function ContactPage() {
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center flex-col ">
        <div>
          <ContactusSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
