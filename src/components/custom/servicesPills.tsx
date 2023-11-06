export default function ServicesPills({ children }: any) {
  return (
    <>
      <span className=" dark:bg-[#242424] bg-gray-200 rounded-[48px] px-[2.5rem] py-[1.5rem] font-normal SMALL_LAPTOP:text-SMALL_LAPTOP-Text whitespace-nowrap mb-[1rem] mr-[1rem] text-M">
        {children}
      </span>
    </>
  );
}
