type DotHeadingsProps = {
  beforeDotWord: string;
  afterDotWord: string;
  secondColor?: string;
  cssClampClass: string;
};

export default function DotHeadings({
  beforeDotWord,
  afterDotWord,
  secondColor,
  cssClampClass,
}: DotHeadingsProps) {
  return (
    <>
      <div className="flex justify-center items-center gap-[1rem]">
        <div className={`dark:text-white text-black ${cssClampClass}`}>
          {beforeDotWord}
        </div>

        <div className="dot  rounded-full bg-foreground clamp-dot"></div>

        <div
          className={`${
            secondColor == "primary" ? "text-primary" : "text-foreground"
          } ${cssClampClass}`}
        >
          {afterDotWord}
        </div>
      </div>
    </>
  );
}
