import Pills, { PillsProps } from "@/components/ui/pills";
type TagAndReadTimeProps = {
  tag: string;
  readTime: number;
};

export default function TagAndReadTime({ tag, readTime }: TagAndReadTimeProps) {
  return (
    <>
      <div className="flex justify-between mb-4 TABLET:mb-6">
        <Pills
          intent={tag?.split(" ").join("") as PillsProps["intent"]}
          size="regularFilterPills"
        >
          {tag}
        </Pills>
        <div className="text-Mobile-Text TABLET:text-Tablet-Text">
          {readTime} min read
        </div>
      </div>
    </>
  );
}
