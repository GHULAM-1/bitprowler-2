type PackagesPillsProps = {
  deliverable: string;
};

export default function PackagesPills({ deliverable }: PackagesPillsProps) {
  return (
    <>
      <div className=" rounded-full flex justify-center items-center dark:bg-[#242424] dark:text-white text-black bg-[#DBDBDB] px-[3rem] py-[1.5rem] whitespace-nowrap">
        {deliverable}
      </div>
    </>
  );
}
