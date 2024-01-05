import BlogHeadingAndSearch from "@/components/blog/blogHeadingAndSearch";
import BlogHeading from "@/components/blog/blogHeading";
import Search from "@/components/blog/search";
import BlogDescription from "@/components/blog/blogDescription";
import Divider from "@/components/blog/divider";
import SearchModal from "@/components/blog/searchModal";
import HotAndFreshSectiion from "@/components/blog/hotAndFreshSection";
import BlogGrid from "@/components/blog/blogGrid";
import Footer from "@/components/ui/footer";
import CTASection from "@/components/ui/CTASection";
import BlogLastSection from "@/components/blog/blogLastSection";
import SeeMoreBtn from "@/components/blog/seeMoreBtn";
import { sanityFetch } from "@/utils/sanityFetch";
import { blogCardsQuery } from "@/utils/queries";
import { blogCardsDataT } from "@/types/types";
import FilterSection from "@/components/blog/filterSection";

export default async function BlogsPage() {
  console.log("in the main blog page");
  const blogCardsData: blogCardsDataT = await sanityFetch({
    query: blogCardsQuery,
  });

  return (
    <>
      <div className=" overflow-y-visible absolute z-0 transition-all ease-linear w-full  flex items-center flex-col">
        <div className="hidden TABLET:flex">
          <SearchModal blogCardsData={blogCardsData} />
        </div>
        <div className=" max-w-screen-LARGE_LAPTOP   flex flex-col w-full  mt-[4rem] pt-[2rem]  px-[2rem]  TABLET:px-[7rem] TABLET:pt-[3.5rem]  SMALL_LAPTOP:px-[10rem] SMALL_LAPTOP:pt-[5rem] text-textPrimaryColor  overflow-y-visible    ">
          <BlogHeadingAndSearch>
            <BlogHeading blogCardsData={blogCardsData} />
            <Search />
          </BlogHeadingAndSearch>
          <BlogDescription />
          <FilterSection />
          <Divider intent="regular" className="mt-[0.75rem] " />
          <HotAndFreshSectiion />
          <BlogGrid blogCardsData={blogCardsData} />

          <div className="flex justify-center w-full mt-14">
            <SeeMoreBtn />
          </div>
          <BlogLastSection />
          <CTASection> Get to know us</CTASection>
        </div>
        <Footer />
      </div>
    </>
  );
}
