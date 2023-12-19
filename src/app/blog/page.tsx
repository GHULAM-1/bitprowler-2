"use client";
import { Suspense, useEffect, useState } from "react";
import { client } from "../../lib/sanity";
import BlogHeadingAndSearch from "./components/blogHeadingAndSearch";
import BlogHeading from "./components/blogHeading";
import { blogMainPageQuerie } from "./data/queries";
import Search from "./components/search";
import BlogDescription from "./components/blogDescription";
import FilterSection from "./components/filterSection";
import Divider from "./components/divider";
import SearchModal from "./components/searchModal";
import { useTogglingStore } from "@/store/store";
import { mainPageDataT } from "../../../types";
import HotAndFreshSectiion from "./components/hotAndFreshSection";
import BlogGrid from "./components/blogGrid";
import { ErrorBoundary } from "react-error-boundary";
import LongBottom from "@/components/ui/longBottom";
import BigCTA from "@/components/ui/bigCTA";
import BlogLastSection from "./components/blogLastSection";
import SeeMoreBtn from "./components/seeMoreBtn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BlogsPage = () => {
  const [data, setData] = useState<mainPageDataT | null>(null);
  const [searchCategory, setSearchCategory] = useState("All");
  const [mainData, setMainData] = useState(null);
  const [searchCategoryMainPage, setSearchCategoryMainpage] =
    useState<string>("All");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(blogMainPageQuerie, {
          cache: "no-store",
        });
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const isSearchActive = useTogglingStore((state: any) => state.isSearchActive);

  if (isSearchActive) {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <div className=" overflow-y-visible absolute z-0 transition-all ease-linear w-full ">
        <div className="hidden TABLET:flex">
          <SearchModal mainPageData={data}></SearchModal>
        </div>
        <div className=" w-full  mt-[4rem] pt-[2rem]  px-[2rem]  TABLET:px-[7rem] TABLET:pt-[3.5rem]  SMALL_LAPTOP:px-[10rem] SMALL_LAPTOP:pt-[5rem] text-textPrimaryColor  overflow-y-visible    ">
          <BlogHeadingAndSearch>
            <BlogHeading mainPageData={data}></BlogHeading>
            <Search></Search>
          </BlogHeadingAndSearch>
          <BlogDescription></BlogDescription>
          <FilterSection
            setSearchCategory={setSearchCategory}
            setSearchCategoryMainPage={setSearchCategoryMainpage}
          ></FilterSection>
          <Divider intent="regular" className="mt-[0.75rem] "></Divider>
          <HotAndFreshSectiion></HotAndFreshSectiion>
          <BlogGrid
            mainPageData={data}
            searchCategory={searchCategoryMainPage}
          ></BlogGrid>

          <div className="flex justify-center w-full mt-14">
            <SeeMoreBtn></SeeMoreBtn>
          </div>
          <BlogLastSection></BlogLastSection>
          <BigCTA> Get to know us</BigCTA>
        </div>
        <LongBottom></LongBottom>
      </div>
    </>
  );
};

export default BlogsPage;
