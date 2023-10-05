import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Customers from "@/components/Customers";
export default function ContactPage(){
    return <>
            <div className = "mt-8">
        <Navbar></Navbar>
        <Contact></Contact>
        <Customers></Customers>
         <Footer></Footer>
        </div>
    </>
}