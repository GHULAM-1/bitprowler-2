type BlogTitleProps = {
  title: string;
};
export default function BlogTitle({ title }: BlogTitleProps) {
  return (
    <>
      <div className="text-SMALL_LAPTOP-Heading">{title}</div>
    </>
  );
}
