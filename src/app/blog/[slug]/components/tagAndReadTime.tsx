import Pills, { PillsProps } from "@/components/custom/pills";

type TagAndReadTimeProps = {
  tag: string | undefined | null;
  readTime: number | undefined | null;
};

export default function TagAndReadTime({ tag, readTime }: TagAndReadTimeProps) {
  return (
    <>
      <div className="flex justify-between">
        <Pills
          intent={tag?.split(" ").join("") as PillsProps["intent"]}
          size="regularFilterPills"
        >
          {tag}
        </Pills>
        <div className="text-SMALL_LAPTOP-L-Text">{readTime} min read</div>
      </div>
    </>
  );
}
