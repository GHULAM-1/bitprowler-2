"use client";
import ActiveSearch from "./activeSearch";
import Divider from "./divider";
import FilterSection from "./filterSection";
import SearchResultBox from "./searchResultBox";
import { mainPageDataT } from "../../../../types";
import { useState } from "react";
import { freshArray, hotArray } from "../data/general";
type searchBoxProps = {
  mainPageData: mainPageDataT | null;
};

export default function SearchBox({ mainPageData }: searchBoxProps) {
  const [searchString, setSearchString] = useState<string>("");
  const [searchCategory, setSearchCategory] = useState<string>("All");

  const searchArray = mainPageData?.map((article) => {
    const tempObj = {
      mainHeading: article.mainHeading,
      slug: article.slug,
      category: article.tag,
    };
    return tempObj;
  });
  const hotAndFresh = {
    hotArray: [hotArray],
    freshArray: [freshArray],
  };
  console.log("ghu");
  console.log("in the search box", searchString, searchCategory);

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
        <FilterSection
          setSearchCategory={setSearchCategory}
          size="blogTags"
        ></FilterSection>
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
