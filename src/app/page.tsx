'use client'
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
// import Layout from "@/components/Layout";

import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import Faq from "@/components/Faq";
import Customers from "@/components/Customers";
import Navbar from "@/components/Navbar";
import Prefooter from "@/components/Prefooter";
import Footer from "@/components/Footer";
import PackagesSection from "@/components/packages/packagesSection";

export default function Home() {
  return (
    // <Layout>
    //   <Hero />
    //   <Services />
    //   <Features />
    //   <Pricing />
    //   <Faq />
    //   <Contact />
    //   <Customers />
    // </Layout>


      <>
      
      <Hero />
      <Services />
      {/* <Features /> */}
      <PackagesSection></PackagesSection>
      <Faq />
      <Contact />
      <Customers />
      {/* <Prefooter></Prefooter> */}
      
    </>
  );
}
