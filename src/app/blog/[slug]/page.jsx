"use client";
import { client } from "../../../lib/sanity";
import { useEffect, useState } from "react";
import TagAndReadTime from "./components/tagAndReadTime";
import BlogTitle from "./components/blogTitle";
import Divider from "../components/divider";
import AuthorSection from "./components/authorSection";
import Authorinfo from "./components/authorInfoPart";
import AuthorSocialsPart from "./components/authorSocialsPart";
import BannerImage from "./components/bannerImage";
import { PortableText } from "@portabletext/react";
import LongBottom from "@/components/ui/longBottom";
import BigCTA from "@/components/ui/bigCTA";
import ShareSection from "./components/shareSection";
import DateSection from "./components/dateSection";
import ReadNextSection from "./components/readNextSection";
import CodeBlock from "./components/customCodeBlock";
import Link from "next/link";
import { SanityImage } from "@/sanityImage";

export default function IndividualBlog({ params }) {
  const [data, setData] = useState(null);
  console.log("slug in individual data", typeof params.slug, params.slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "post" && slug.current == "${params.slug}"] {
  ...,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
  "authorImage":authorImage.asset->url,
  "bannerImage":bannerImage.asset->url,
  readNextArticles


}`,
          {
            cache: "no-store",
          }
        );
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const components = {
    block: {
      h2: ({ children }) => (
        <h2 className="text-textPrimaryColor   text-Mobile-Head font-semibold TABLET:text-SMALL_LAPTOP-S-Subheading mt-10 mb-3 TABLET:mt-12 TABLET:mb-3    w-full">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-textPrimaryColor text-Mobile-S-Heading font-medium TABLET:text-SMALL_LAPTOP-L-Text mt-10 mb-3 TABLET:mt-12  TABLET:mb-3 w-full">
          {children}
        </h3>
      ),

      normal: ({ children }) => (
        <span className=" text-textPrimaryColor leading-9 text-Mobile-Text TABLET:text-SMALL_LAPTOP-Text ">
          {children}
        </span>
      ),

      blockquote: ({ children }) => (
        <blockquote className=" text-white leading-8 text-Mobile-Text TABLET:text-SMALL_LAPTOP-Text my-20 py-16  bg-themeColor px-8 TABLET:px-28">
          {children}
        </blockquote>
      ),
    },

    marks: {
      link: ({ children, value }) => (
        <Link
          href={value.href}
          className="text-themeColor underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      ),
    },

    types: {
      myCodeField: ({ value }) => (
        <CodeBlock data={value.code} fileName={value.filename}></CodeBlock>
      ),
      image: ({ value }) => {
        return <SanityImage {...value} />;
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className=" pl-10 leading-9 text-textPrimaryColor my-2 TABLET:my-4 list-disc TABLET:text-SMALL_LAPTOP-Text text-Mobile-Text gap-3 TABLET:gap-4 flex flex-col TABLET:pl-16 w-full">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="w-full TABLET:pl-16 leading-9 pl-10 text-textPrimaryColor my-2 TABLET:my-4 list-decimal TABLET:text-SMALL_LAPTOP-Text text-Mobile-Text gap-3 TABLET:gap-4 flex flex-col">
          {children}
        </ol>
      ),

      checkmarks: ({ children }) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },
  };

  if (data !== null && data !== undefined) {
    return (
      <>
        <div className="w-full flex justify-center items-center">
          <div className="mt-16 flex flex-col text-textPrimaryColor max-w-[800px] pt-10  px-6 TABLET:px-8 w-full   ">
            <TagAndReadTime
              readTime={data[0]?.estimatedReadingTime}
              tag={data[0]?.category[0]}
            ></TagAndReadTime>
            <BlogTitle title={data[0]?.title}></BlogTitle>
            <Divider intent="regular" className="mt-1"></Divider>
            <AuthorSection>
              <Authorinfo
                authorName={data[0]?.authorName}
                authorImage={data[0]?.authorImage}
              ></Authorinfo>
              <AuthorSocialsPart
                firstSocialLink={data[0]?.firstSocialLink}
                secondSocialLink={data[0]?.secondSocialLink}
              ></AuthorSocialsPart>
            </AuthorSection>
            <Divider intent="regular" className="mt-1"></Divider>
            <BannerImage imageUrl={data[0]?.bannerImage}></BannerImage>

            <div className="flex w-full flex-col justify-center items-center">
              <PortableText value={data[0]?.body} components={components} />
            </div>
            <Divider intent="regular" className="mt-1"></Divider>
            <DateSection date={data[0]?.publishedAt}></DateSection>
            <ShareSection></ShareSection>
            <ReadNextSection
              readNextSlugs={data[0]?.readNextArticles}
            ></ReadNextSection>
          </div>
        </div>
        <div className="px-6">
          <BigCTA>Get to know us</BigCTA>
        </div>
        <LongBottom></LongBottom>
      </>
    );
  } else {
    return (
      <>
        <div>Loading ....</div>
      </>
    );
  }
}
