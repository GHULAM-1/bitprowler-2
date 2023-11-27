import Image from "next/image";
type AuthorInfo = {
  authorName: string;
  authorImage: string;
};

export default function Authorinfo({ authorName, authorImage }: AuthorInfo) {
  console.log("checking author Image", authorImage);
  return (
    <>
      <div className="flex gap-4">
        <Image
          src={authorImage}
          height={50}
          width={50}
          alt="BannerImage"
        ></Image>
        <div>{authorName}</div>
      </div>
    </>
  );
}
