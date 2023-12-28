"use client";
import { filterPills } from "../../data/blog/general";
import { useState } from "react";
import Pills, { PillsProps } from "@/components/ui/pills";
import { useTogglingStore } from "@/stores/togglingStore";
type FilterSectionProps = {
  size?: string;
};

export default function FilterSection({ size }: FilterSectionProps) {
  const setSearchCategory = useTogglingStore(
    (state: any) => state.setSearchCategory
  );
  const setSearchCategoryMainPage = useTogglingStore(
    (state: any) => state.setSearchCategoryMainPage
  );

  const searchCategory = useTogglingStore((state: any) => state.searchCategory);
  const searchCategoryMainPage = useTogglingStore(
    (state: any) => state.searchCategoryMainPage
  );

  const [activeButton, setActiveButton] = useState<number | null>(0);
  const isSearchActive = useTogglingStore((state: any) => state.isSearchActive);

  const [intentMap, setIntentMap] = useState<Record<number, string>>({
    0: "All",
  });
  console.log("active button index , ", activeButton);
  console.log(
    searchCategory,
    searchCategoryMainPage,
    "categories in filter section "
  );

  const handleButtonClick = (buttonIndex: number, pill: string) => {
    setActiveButton(buttonIndex);
    if (isSearchActive) {
      setSearchCategory(pill);
    }

    if (!isSearchActive) {
      setSearchCategoryMainPage(pill);
    }

    setIntentMap((prevIntentMap) => {
      const newIntentMap = { ...prevIntentMap };

      newIntentMap[buttonIndex] = pill.split(" ").join("");

      Object.keys(newIntentMap).forEach((key: any) => {
        if (parseInt(key) !== buttonIndex) {
          delete newIntentMap[key];
        }
      });

      return newIntentMap;
    });
  };

  return (
    <>
      <div className="flex mt-[0.75rem] mb-[0.75rem] TABLET:mb-[1.5rem] gap-[0.75rem] SMALL_LAPTOP:gap-[1rem] flex-wrap transition-all">
        {filterPills.map((pill, index) => (
          <Pills
            intent={(intentMap[index] as PillsProps["intent"]) || "filterTag"}
            size={(size as PillsProps["size"]) || "regularFilterPills"}
            name={pill}
            key={index}
            onClick={() => handleButtonClick(index, pill)}
          >
            {pill}
          </Pills>
        ))}
      </div>
    </>
  );
}
