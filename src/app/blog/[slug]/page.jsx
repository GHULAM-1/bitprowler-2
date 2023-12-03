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
import LongBottom from "@/components/custom/longBottom";
import BigCTA from "@/components/custom/bigCTA";
import ShareSection from "./components/shareSection";
import DateSection from "./components/dateSection";
import ReadNextSection from "./components/readNextSection";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import CodeBlock from "./components/customCodeBlock";
export default function IndividualBlog({ params }) {
  Refractor.registerLanguage(js);
  Refractor.registerLanguage(typescript);
  Refractor.registerLanguage(tsx);
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
        <h2 className="text-SMALL_LAPTOP-Heading text-themeColor">
          {children}
        </h2>
      ),
    },

    types: {  
      myCodeField: ({ value }) => <CodeBlock data={value.code}></CodeBlock>,
    },
  };

  if (data !== null && data !== undefined) {
    return (
      <>
        <div className="mt-16 flex flex-col text-textPrimaryColor">
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
              authorLinkedin={data[0]?.authorLinkedin}
              authorTwitter={data[0]?.authorTwitter}
            ></AuthorSocialsPart>
          </AuthorSection>
          <Divider intent="regular" className="mt-1"></Divider>
          <BannerImage imageUrl={data[0]?.bannerImage}></BannerImage>
          <PortableText value={data[0]?.body} components={components} />
          <Divider intent="regular" className="mt-1"></Divider>
          <DateSection date={data[0]?.publishedAt}></DateSection>
          <ShareSection></ShareSection>
          <ReadNextSection
            readNextSlugs={data[0]?.readNextArticles}
          ></ReadNextSection>
          <BigCTA>Get to know us</BigCTA>
          <LongBottom></LongBottom>
        </div>
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
