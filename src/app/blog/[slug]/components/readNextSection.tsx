import ReadNextLinkCard from "./readNextLinkCard";
type ReadNextSectionProps = {
  readNextSlugs: string[];
};
export default function ReadNextSection({
  readNextSlugs,
}: ReadNextSectionProps) {
  console.log("in the link section", readNextSlugs);
  return (
    <>
      <div>
        <div>Related Articles</div>
        <div>
          {readNextSlugs?.map((item) => {
            return <ReadNextLinkCard readNextSlug={item}></ReadNextLinkCard>;
          })}
        </div>
      </div>
    </>
  );
}
