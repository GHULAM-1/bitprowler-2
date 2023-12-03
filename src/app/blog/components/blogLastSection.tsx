import BitprowlerText from "@/components/custom/bitprowlerText";
export default function BlogLastSection() {
  return (
    <>
      <div className="flex w-full ">
        <div className="w-1/2 flex flex-col text-left">
          <div>
            Ready to take your digital presence to the{" "}
            <span className="text-themeColor">next</span> level?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Hac quis malesuada sit arcu
            duis.
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <BitprowlerText></BitprowlerText>
        </div>
      </div>
    </>
  );
}
