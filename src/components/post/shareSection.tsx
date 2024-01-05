"use client";
import { useState } from "react";
import Pills from "@/components/ui/pills";
import LinkSVG from "~/linkSVG";
import TickSVG from "../../../public/tickSVG";

type ShareSectionProps = {
  slug: string;
};
export default function ShareSection({ slug }: ShareSectionProps) {
  const [isCopied, setIsCopied] = useState(false);

  const url = `https://www.bitprowler.com//blog/${slug}`;
  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <>
      <div className="mt-16 TABLET:mt-10 mb-16 TABLET:mb-28">
        <div className="text-Mobile-Head TABLET:text-Tablet-Subheading mb-2">
          Liked what you read?
          <div>
            <span className="text-themeColor">share it</span> with your friends
          </div>
        </div>

        <Pills intent="All" size="regularFilterPills" onClick={handleCopyClick}>
          {isCopied ? (
            <div className="flex flex-row-reverse justify-center items-center gap-2">
              <div>copied</div>
              <TickSVG className="w-[20px] h-[20px] fill-none dark:stroke-black stroke-white"></TickSVG>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <LinkSVG className="w-6 h-6 fill-none"></LinkSVG>
              <span>Copy Link</span>
            </div>
          )}
        </Pills>
      </div>
    </>
  );
}
