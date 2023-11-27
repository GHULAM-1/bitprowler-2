import Image from "next/image";

type BannerImageProps = {
  imageUrl: string;
};
export default function BannerImage({ imageUrl }: BannerImageProps) {
  return (
    <>
      <Image src={imageUrl} height={500} width={500} alt="BannerImage"></Image>
    </>
  );
}
