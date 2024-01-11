import TagAndReadTime from "@/components/post/tagAndReadTime";
import BlogTitle from "@/components/post/blogTitle";
import Divider from "@/components/blog/divider";
import AuthorSection from "@/components/post/authorSection";
import Authorinfo from "@/components/post/authorInfoPart";
import AuthorSocialsPart from "@/components/post/authorSocialsPart";
import BannerImage from "@/components/post/bannerImage";
import { PortableText } from "@portabletext/react";
import Footer from "@/components/ui/footer";
import CTASection from "@/components/ui/CTASection";
import ShareSection from "@/components/post/shareSection";
import DateSection from "@/components/post/dateSection";
import ReadNextSection from "@/components/post/readNextSection";
import CodeBlock from "@/components/post/customCodeBlock";
import Link from "next/link";
import { SanityImage } from "../../../../sanity/sanityImage";
import { sanityFetchSinglePost } from "@/utils/sanityFetch";

export async function generateMetadata({ params }) {
  const data = await sanityFetchSinglePost({ slug: params.slug });
  return {
    title: data[0]?.title,
    openGraph: {
      images: data[0]?.bannerImage,
    },
  };
}

export default async function IndividualBlog({ params }) {
  const data = await sanityFetchSinglePost({ slug: params.slug });
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
            />
            <BlogTitle title={data[0]?.title} />
            <Divider intent="regular" className="mt-1" />

            <AuthorSection>
              <Authorinfo
                authorName={data[0]?.authorName}
                authorImage={data[0]?.authorImage}
              />
              <AuthorSocialsPart
                firstSocialLink={data[0]?.firstSocialLink}
                secondSocialLink={data[0]?.secondSocialLink}
              />
            </AuthorSection>

            <Divider intent="regular" className="mt-1" />
            <BannerImage imageUrl={data[0]?.bannerImage} />

            <div className="flex w-full flex-col justify-center items-center">
              <PortableText value={data[0]?.body} components={components} />
            </div>
            <Divider intent="regular" className="mt-1" />
            <DateSection date={data[0]?.publishedAt} />
            <ShareSection slug={params.slug} />
            <ReadNextSection readNextSlugs={data[0]?.readNextArticles} />
          </div>
        </div>
        <div className="px-6 flex  justify-center  items-center">
          <CTASection path="/">Get to know us</CTASection>x
        </div>

        <Footer />
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
