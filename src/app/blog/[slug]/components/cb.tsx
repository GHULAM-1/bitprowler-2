import { useState } from "react";
import CopySVG from "../../../../../public/copySVG";
import TickSVG from "../../../../../public/tickSVG";

type CBProps = {
  text: any;
  fileName: string;
};

export default function CB({ text, fileName }: CBProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="w-full flex justify-between  py-4 px-7 text-textPrimaryColor rounded-t-[8px] dark:border-zinc-700 border-b-[1px] border-neutral-300 ">
      <span className="text-textPrimaryColor">{fileName}</span>
      <button title="copy code" onClick={handleCopyClick}>
        {isCopied ? (
          <div className="flex flex-row-reverse justify-center items-center gap-2">
            <div>copied</div>
            <TickSVG className="w-[20px] h-[20px] fill-none dark:stroke-white stroke-black"></TickSVG>
          </div>
        ) : (
          <CopySVG className="w-[30px] h-[30px] fill-none stroke-textPrimaryColor"></CopySVG>
        )}
      </button>
    </div>
  );
}
