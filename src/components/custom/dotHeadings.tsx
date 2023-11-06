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
      <div className="flex justify-center items-center gap-[1rem]  SMALL_LAPTOP:px-[4.5rem] SMALL_LAPTOP:justify-start SMALL_LAPTOP:h-[10%] SMALL_LAPTOP:mb-[2.5rem] mt-[3rem]">
        <div
          className={`dark:text-white text-black SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading `}
        >
          {beforeDotWord}
        </div>

        <div className="dot  rounded-full bg-textPrimaryColor w-[24px] h-[24px]"></div>

        <div
          className={`SMALL_LAPTOP:text-SMALL_LAPTOP-Subheading ${
            secondColor == "primary" ? "text-primary" : "text-foreground"
          } `}
        >
          {afterDotWord}
        </div>
      </div>
    </>
  );
}
