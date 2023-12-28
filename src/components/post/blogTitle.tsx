type BlogTitleProps = {
  title: string;
};
export default function BlogTitle({ title }: BlogTitleProps) {
  return (
    <>
      <div className="text-Tablet-Large-Text mb-6 TABLET:text-Tablet-Head TABLET:mb-8 ">
        {title}
      </div>
    </>
  );
}
