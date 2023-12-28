export default function BlogHeadingAndSearch({ children }: any) {
  return (
    <>
      <div className="flex flex-col TABLET:flex-row  TABLET:justify-between TABLET:items-center ">
        {children}
      </div>
    </>
  );
}
