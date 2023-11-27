import Pills from "@/components/custom/pills";
import { useState } from "react";
import { useTogglingStore } from "@/store/store";
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
      <div className="flex">
        <Pills
          intent={isHot ? "cta" : "highlight"}
          size="regularFilterPills"
          id="1"
          onClick={() => handleClick("1")}
        >
          <span>Hot</span>
          <span>{"-->"}</span>
        </Pills>
        <Pills
          intent={isFresh ? "cta" : "highlight"}
          size="regularFilterPills"
          onClick={() => handleClick("2")}
        >
          <span>Fresh</span>
          <span>{"-->"}</span>
        </Pills>
      </div>
    </>
  );
}
