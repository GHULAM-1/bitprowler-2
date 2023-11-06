type ManifestoSectionProps = {
  manifesto?: string;
  firstWord: string;
  secondWord: string;
};
export default function ManifestoSection({
  manifesto,
  firstWord,
  secondWord,
}: ManifestoSectionProps) {
  return (
    <>
      <div className="flex px-[15.11%]  flex-col w-full  h-screen   text-center items-center justify-center dark:bg-white bg-black TABLET:text-left SMALL_LAPTOP:items-center SMALL_LAPTOP:text-center">
        <div className="text-themeColor SMALL_LAPTOP:text-SMALL_LAPTOP-Heading  border-b-2 dark:border-black border-white text-Mobile-L-Head mb-[4.18%] TABLET:text-Tablet-Head  ">
          <span className="dark:text-black text-white  ">{firstWord} </span>
          {secondWord}
          <span className="dark:text-black text-white">.</span>
        </div>

        <div className="dark:text-black text-white text-Mobile-Text LAPTOP:w-[55%]  TABLET:text-Tablet-Text SMALL_LAPTOP:w-[60%] TABLET:w-[80%] SMALL_LAPTOP:text-SMALL_LAPTOP-L-Text text-center">
          {manifesto}
        </div>
      </div>
    </>
  );
}
