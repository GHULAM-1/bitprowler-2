import Image from "next/image";
import Link from "next/link";

const customers = [
  {
    name: "google-play",
    href: "https://play.google.com/",
    src: "/workedWith/google-play.svg",
    alt: "Google play logo",
  },
  {
    name: "github",
    href: "https://github.com/",
    src: "/workedWith/github.svg",
    alt: "Github logo",
  },
  {
    name: "docker",
    href: "https://www.docker.com/",
    src: "/workedWith/docker.svg",
    alt: "Docker logo",
  },
  {
    name: "python",
    href: "https://www.python.org/",
    src: "/workedWith/python.svg",
    alt: "Python logo",
  },
  {
    name: "slack",
    href: "https://slack.com/",
    src: "/workedWith/slack.svg",
    alt: "Slack logo",
  },
  {
    name: "discord",
    href: "https://discord.com/",
    src: "/workedWith/discord.svg",
    alt: "Discord logo",
  },
];

export default function CustomersSection() {
  return (
    <div className=" bg-secondaryBackgroundColor w-full  pt-16 pb-16 flex flex-col SMALL_LAPTOP:items-start px-[4.5rem] ">
      <h2 className=" text-center text-SMALL_LAPTOP-Subheading mb-[2rem]">
        Clients Who Trust Us
      </h2>

      <div className="gap-y-[1rem] w-full text-center justify-center gap-x-[2rem] justify-items-center items-center grid grid-cols-2 sm:grid-cols-3 SMALL_LAPTOP:grid-cols-6">
        {customers.map((item) => (
          <Link key={item.name} href={item.href} target="_blank">
            <div className="border-[1px] rounded-[8px] dark:border-white border-black">
              <Image
                className="w-[60px] h-[60px] my-[2rem]  justify-center text-center mx-[2rem] hover:scale-110 transition "
                src={item.src}
                alt={item.alt}
                width={50}
                height={50}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
