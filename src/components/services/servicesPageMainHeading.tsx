export default function ServicesPageMainHeading({ children }: any) {
  return (
    <>
      <div className="text-[5.5rem] font-normal flex justify-start items-center gap-[2rem]  mt-[3rem] mb-[2rem] clamp-48px ">
        <div>Services</div>

        <div
          className="clamp-width-48px clamp-height-48px bg-black
                dark:bg-white rounded-full"
        ></div>

        <div>{children}</div>
      </div>
    </>
  );
}
