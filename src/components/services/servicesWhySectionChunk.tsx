type ServicesWhySectionChunkProps = {
  heading: string;
  brief: string;
};

export default function ServicesWhySectionChunk({
  heading,
  brief,
}: ServicesWhySectionChunkProps) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mb-[7.4%]">
        <div className="flex text-Mobile-Head font-medium w-full justify-center">
          {heading}
        </div>
        <div className="flex text-center text-Mobile-Text w-full justify-center">
          {brief}
        </div>
      </div>
    </>
  );
}
