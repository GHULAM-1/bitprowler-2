import Image from "next/image";
type AuthorInfo = {
  authorName: string;
  authorImage: string;
};

export default function Authorinfo({ authorName, authorImage }: AuthorInfo) {
  return (
    <>
      <div className="flex gap-4 items-center">
        <div
          className="w-[44px] h-[44px]  relative  rounded-full overflow-hidden "
          title={authorName}
        >
          <Image
            src={authorImage}
            layout="fill"
            alt="AuthorImage"
            objectFit="cover"
            objectPosition="top center"
            className="rounded-full aspect-square bg-themeColor"
          />
        </div>
        <div className="text-Mobile-Text TABLET:text-SMALL_LAPTOP-Text">
          By {authorName}
        </div>
      </div>
    </>
  );
}
