import Pills from "@/components/ui/pills";
import { useState } from "react";
import { useTogglingStore } from "@/store/store";
import HotSVg from "../../../../public/hotSVG";
import CupSVG from "../../../../public/cupSVG";
export default function HotAndFreshSectiion() {
  const [isHot, toggleIsHot] = useState(false);
  const [isFresh, toggleIsFresh] = useState(false);
  const currentState = useTogglingStore((state: any) => state.currentState);
  const changeCurrentState = useTogglingStore(
    (state: any) => state.changeCurrentState
  );

  const handleClick = (id: string) => {
    if (id === "1" && !isHot) {
      toggleIsHot(true);
      toggleIsFresh(false);
    }
    if (id === "2" && !isFresh) {
      toggleIsFresh(true);
      toggleIsHot(false);
    }

    if (id === "1" && isHot) {
      toggleIsHot(false);
    }

    if (id === "2" && isFresh) {
      toggleIsFresh(false);
    }
  };

  return (
    <>
      <div className="flex mt-11 TABLET:mt-14 SMALL_LAPTOP:mt-16 TABLET:gap-4 gap-2">
        <Pills
          intent={isHot ? "cta" : "highlight"}
          size="regularFilterPills"
          id="1"
          onClick={() => handleClick("1")}
        >
          <HotSVg className="SMALL_LAPTOP:w-[30px] SMALL_LAPTOP:h-[30px] TABLET:w-[24px] TABLET:h-[24px] text-textPrimaryColor fill-none w-[15px] h-[15px] "></HotSVg>
          <span>Hot</span>
        </Pills>
        <Pills
          intent={isFresh ? "cta" : "highlight"}
          size="regularFilterPills"
          onClick={() => handleClick("2")}
        >
          <CupSVG className="SMALL_LAPTOP:w-[30px] SMALL_LAPTOP:h-[30px] text-textPrimaryColor   TABLET:w-[24px] TABLET:h-[24px] w-[15px] h-[15px] fill-none"></CupSVG>
          <span className="">Fresh</span>
        </Pills>
      </div>
    </>
  );
}
