"use client";
import ActiveSearch from "./activeSearch";
import Divider from "./divider";
import FilterSection from "./filterSection";
import SearchResultBox from "./searchResultBox";
import { blogCardsDataT } from "@/types/types";
import { useEffect, useState } from "react";
import { freshArray, hotArray } from "../../data/blog/general";
import { useTogglingStore } from "@/stores/togglingStore";
type searchBoxProps = {
  blogCardsData: blogCardsDataT;
};

export default function SearchBox({ blogCardsData }: searchBoxProps) {
  const [searchString, setSearchString] = useState<string>("");
  const [searchArray, setSearchArray] = useState<any[]>([]);
  const searchCategory = useTogglingStore((state: any) => state.searchCategory);
  useEffect(() => {
    const fetchData = async () => {
      if (blogCardsData) {
        const data = await blogCardsData;
        setSearchArray(
          data.map((article: any) => ({
            mainHeading: article.mainHeading,
            slug: article.slug,
            category: article.tag,
          }))
        );
      }
    };

    fetchData();
  }, [blogCardsData]);

  const hotAndFresh = {
    hotArray: [hotArray],
    freshArray: [freshArray],
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className="w-full  TABLET:w-[800px] TABLET:h-[602px] dark:bg-[#242424] bg-[#DBDBDB]  TABLET:mx-[1rem] TABLET:px-12 TABLET:py-4 px-8 py-2 TABLET:rounded-2xl"
        onClick={handleClick}
      >
        <ActiveSearch setSearchString={setSearchString}></ActiveSearch>
        <FilterSection size="blogTags"></FilterSection>
        <Divider intent="dropDown" className="mt-[0.75rem]"></Divider>
        <SearchResultBox
          searchCategory={searchCategory}
          searchString={searchString}
          searchArray={searchArray}
          hotAndFresh={hotAndFresh}
        ></SearchResultBox>
      </div>
    </>
  );
}
