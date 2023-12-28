import Link from "next/link";
import FacebookSVG from "~/facebookSVG";
import FiverSVG from "~/fiverSVG";
import InstagramSVG from "~/instagramSVG";
import LinkedinSVG from "~/linkedinSVG";
import { nanoid } from "nanoid";
export default function Footer() {
  const SVGClasses =
    " SMALL_LAPTOP:w-[30px] SMALL_LAPTOP:h-[30px] TABLET:w-[24px] TABLET:h-[24px] w-[20px] h-[20px]  ";
  const socials = [
    {
      id: nanoid(),
      icon: <InstagramSVG className={SVGClasses} />,
      url: "https://www.instagram.com/bitprowler/",
    },
    {
      id: nanoid(),
      icon: <FacebookSVG className={SVGClasses} />,
      url: "https://www.facebook.com/bitprowler/",
    },
    {
      id: nanoid(),
      icon: <LinkedinSVG className={SVGClasses} />,

      url: "https://pk.linkedin.com/company/bitprowler",
    },
    {
      id: nanoid(),
      icon: <FiverSVG className={SVGClasses} />,

      url: "https://www.fiver.com/bitprowler/",
    },
  ];

  return (
    <>
      {/* mobile */}
      <div className="flex flex-col w-full justify-center items-center TABLET:hidden   ">
        <div className="flex  items-center p-[1rem] justify-between bg-[#EAEAEA] dark:bg-[#151515] text-black dark:text-white w-[99%] rounded-t-[0.5rem]   ">
          <div className="text-Mobile-Head font-bold">
            <span className="text-themeColor">bit</span>
            <span className="text-textPrimaryColor">prowler</span>
            <span className="text-themeColor">.</span>
          </div>
          <div className="hidden text-small-text  w-[70%] laptop_sm:flex justi  fy-center desktop:text-[1.5rem] ">
            © Copyright 2023. All rights reserved.
          </div>
          <div className="flex gap-[0.5rem] justify-end laptop_lg:gap-[1.5rem] desktop:gap-[2.5rem] items-center">
            {socials.map((social) => {
              return (
                <Link href={social.url} key={social.id}>
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center text-[0.8rem]  py-[1rem] dark:bg-[#151515] bg-[#EAEAEA] w-[99%] dark:text-white text-black laptop_sm:hidden rounded-b-[0.5rem]">
          © Copyright 2023. All rights reserved.
        </div>
      </div>
      {/* other devices */}

      <div className="flex w-full items-center justify-center">
        <div className="hidden TABLET:flex bg-tertiaryBackgroundColor w-[98%] rounded-[1rem] justify-between px-[2rem] py-[1rem] items-center">
          <div className="TABLET:text-SMALL_LAPTOP-L-Text font-black">
            <span className="text-themeColor">bit</span>
            <span className="text-textPrimaryColor">prowler</span>
            <span className="text-themeColor">.</span>
          </div>

          <div className="TABLET:text-Tablet-Caption SMALL_LAPTOP:text-SMALL_LAPTOP-S-Text">
            © Copyright 2023. All rights reserved.
          </div>
          <div className="flex gap-[1rem] ">
            {socials.map((social) => {
              return (
                <Link href={social.url} key={social.id}>
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
