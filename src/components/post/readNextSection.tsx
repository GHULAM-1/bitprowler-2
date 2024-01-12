import ReadNextLinkCard from "./readNextLinkCard";
type ReadNextSectionProps = {
  readNextSlugs: string[];
};
export default function ReadNextSection({
  readNextSlugs,
}: ReadNextSectionProps) {
  if (readNextSlugs) {
    return (
      <>
        <div>
          <div className="text-Tablet-Large-Text TABLET:text-Tablet-Head">
            Related Articles
          </div>
          <div className="grid grid-cols-1 TABLET:grid-cols-2 gap-y-8 TABLET:gap-x-28 TABLET:mt-12 TABLET:mb-20 mt-8 mb-12 ">
            {readNextSlugs?.map((item, i) => {
              return (
                <ReadNextLinkCard
                  readNextSlug={item}
                  key={i}
                ></ReadNextLinkCard>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
