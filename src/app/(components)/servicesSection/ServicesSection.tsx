import ServiceCard from "./serviceSectionCard";
import { ServicesSectionCardContent } from "@/app/(data)/servicesSection/servicesSectionCardContent";
import Image from "next/image";
export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col items-center  w-screen h-screen ">
        <div className="main-div  flex flex-col w-[85%]  items-center max-[750px]:items-center">
          <div className="w-[85%]">
            <div className="heading text-heading clamp-service-section-main-heading my-[4rem]  ">
              Services
            </div>
          </div>

          <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 max-[750px]:grid-cols-1 gap-x-[2rem] w-[85%] ">
            {ServicesSectionCardContent.map((cardContent, index) => {
              return (
                <>
                  <ServiceCard
                    mainHeading={cardContent.mainHeading}
                    description={cardContent.description}
                    iconDark={cardContent.iconDarkMode}
                    index={index}
                  ></ServiceCard>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// 'use client'
// import Image from "next/image";
// import { Button } from "./ui/button";

// const services = [
//   {
//     title: "web dev",
//     description:
//       "Bit Prowler excels in creating visually stunning and highly functional websites tailored to your unique business needs.",
//     image: "/images/services/1.svg",
//     alt: "web development",
//   },
//   {
//     title: "SEO",
//     description:
//       "Bit Prowler leverages proven SEO strategies to enhance your online visibility and drive organic traffic to your website, ensuring you stand out in search engine rankings.",
//     image: "/images/services/2.svg",
//     alt: "search engine optimization",
//   },
//   {
//     title: "security",
//     description:
//       "Bit Prowler employs state-of-the-art security measures to safeguard your digital assets and protect your business from cyber threats, providing peace of mind in the digital world.",
//     image: "/images/services/3.svg",
//     alt: "security",
//   },
//   {
//     title: "marketing",
//     description:
//       "Bit Prowler deploys strategic marketing tactics to amplify your brand's reach and connect with your target audience effectively, driving growth and success.",
//     image: "/images/services/4.svg",
//     alt: "marketing",
//   },
//   {
//     title: "UI/UX",
//     description:
//       "Bit Prowler excels in crafting intuitive and visually appealing user interfaces (UI) and seamless user experiences (UX) to engage and delight your audience.",
//     image: "/images/services/5.svg",
//     alt: "design services",
//   },
//   {
//     title: "mobile dev",
//     description:
//       "Bit Prowler specializes in creating robust and user-friendly mobile applications that cater to your specific business goals and user needs, ensuring a seamless mobile experience.",
//     image: "/images/services/6.svg",
//     alt: "mobile dev",
//   },
// ];
// export function Services() {

//   return (
//     <div className="bg-background dark:bg-background" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
//         <h2 className="text-4xl font-bold">Our Services</h2>

//         <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400 ">
//         Bit Prowler specializes in crafting cutting-edge websites and mobile apps while also providing top-notch services in marketing, SEO, and security to boost your digital presence and protect your online assets.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16 ">
//         {services.map(({ title, description, image, alt }) => (
//           <div key={title}className="bg-accent rounded p-[1.5rem] hover:bg-secondary cursor-pointer flex justify-center items-center flex-col gap-[0.5rem] border-[border]" >
//             <div className="h-32 w-32 flex justify-center mx-auto">
//               <Image
//                 src={image}
//                 alt={alt}
//                 width={130}
//                 height={130}
//                 quality={75}
//                 sizes="100vw"
//                 priority
//               />
//             </div>
//             <h2 className="font-bold text-lg text-center">{title}</h2>
//             <p className="pt-2 text-base text-center dark:text-neutral-400">
//               {description}
//             </p>
//             <Button>see more</Button>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// <div className=" grid grid-cols-3 justify-center justify-items-center px-[10rem] max-[1222px]:grid-cols-2 max-[1146px]:px-[1rem] max-[676px]:grid-cols-1 max-[676px]:px-[1rem] ">
//   {ServicesSectionCardContent.map((cardContent, index) => {
//     return (
//       <>
//         <ServiceCard
//           mainHeading={cardContent.mainHeading}
//           description={cardContent.description}
//           iconDark={cardContent.iconDarkMode}
//         ></ServiceCard>
//       </>
//     );
//   })}
// </div>;
