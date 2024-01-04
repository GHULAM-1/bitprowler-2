type DotHeadingsProps = {
  beforeDotWord: string;
  afterDotWord: string;
  secondColor?: string;
};

export default function DotHeadings({
  beforeDotWord,
  afterDotWord,
  secondColor,
}: DotHeadingsProps) {
  return (
    <>
      <div className="flex justify-center items-center gap-[1rem]  TABLET:px-[4.5rem] TABLET:justify-start TABLET:h-[10%] TABLET:mb-[2.5rem] mt-[3rem] max-w-screen-LARGE_LAPTOP  w-full">
        <div
          className={`dark:text-white text-black SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading TABLET:text-Tablet-S-Heading `}
        >
          {beforeDotWord}
        </div>

        <div className="dot  rounded-full bg-textPrimaryColor w-[24px] h-[24px] TABLET:w-[20px] TABLET:h-[20px]"></div>

        <div
          className={`SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading TABLET:text-Tablet-S-Heading  ${
            secondColor == "primary" ? "text-themeColor" : "text-foreground"
          } `}
        >
          {afterDotWord}
        </div>
      </div>
    </>
  );
}
