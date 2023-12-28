import Image from "next/image";

type BannerImageProps = {
  imageUrl: string;
};
export default function BannerImage({ imageUrl }: BannerImageProps) {
  return (
    <>
      <Image
        src={imageUrl}
        height={100}
        width={500}
        alt="BannerImage"
        className="w-full my-12"
        objectFit="cover"
        objectPosition="center"
      ></Image> 
    </>
  );
}
