type ManifestoSectionProps = {
  manifesto: string;
};
export default function ManifestoSection({ manifesto }: ManifestoSectionProps) {
  return (
    <>
      <div className="flex   flex-col w-full  h-screen   text-center items-center justify-center dark:bg-white bg-black">
        <div className="text-primary border-b-2 dark:border-black border-white text-Mobile-L-Head mb-[4.18%]   ">
          <span className="dark:text-black text-white  ">Our </span>
          manifesto
          <span className="dark:text-black text-white">.</span>
        </div>  

        <div className="dark:text-black text-white text-Mobile-Text px-[5.11%]">
          {manifesto}
        </div>
      </div>
    </>
  );
}
