'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const services = [
  {
    title: "web dev",
    description:
      "Bit Prowler excels in creating visually stunning and highly functional websites tailored to your unique business needs.",
    image: "/images/services/1.svg",
    alt: "web development",
  },
  {
    title: "SEO",
    description:
      "Bit Prowler leverages proven SEO strategies to enhance your online visibility and drive organic traffic to your website, ensuring you stand out in search engine rankings.",
    image: "/images/services/2.svg",
    alt: "search engine optimization",
  },
  {
    title: "security",
    description:
      "Bit Prowler employs state-of-the-art security measures to safeguard your digital assets and protect your business from cyber threats, providing peace of mind in the digital world.",
    image: "/images/services/3.svg",
    alt: "security",
  },
  {
    title: "marketing",
    description:
      "Bit Prowler deploys strategic marketing tactics to amplify your brand's reach and connect with your target audience effectively, driving growth and success.",
    image: "/images/services/4.svg",
    alt: "marketing",
  },
  {
    title: "UI/UX",
    description:
      "Bit Prowler excels in crafting intuitive and visually appealing user interfaces (UI) and seamless user experiences (UX) to engage and delight your audience.",
    image: "/images/services/5.svg",
    alt: "design services",
  },
  {
    title: "mobile dev",
    description:
      "Bit Prowler specializes in creating robust and user-friendly mobile applications that cater to your specific business goals and user needs, ensuring a seamless mobile experience.",
    image: "/images/services/6.svg",
    alt: "mobile dev",
  },
];
export function Services() {
  AOS.init();

  return (
    <div className="bg-background dark:bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400 " data-aos="fade-up">
        Bit Prowler specializes in crafting cutting-edge websites and mobile apps while also providing top-notch services in marketing, SEO, and security to boost your digital presence and protect your online assets.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16 ">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}className="bg-accent rounded p-[1.5rem] hover:bg-secondary cursor-pointer flex justify-center items-center flex-col gap-[0.5rem] border-[border]" >
            <div className="h-32 w-32 flex justify-center mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
            <Button>see more</Button>
          </div>
        ))}


      </div>
    </div>
  );
}
