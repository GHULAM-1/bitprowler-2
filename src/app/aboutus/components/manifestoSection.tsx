type ManifestoSectionProps = {
  manifesto: string;
};
export default function ManifestoSection({ manifesto }: ManifestoSectionProps) {
  return (
    <>
      <div className="flex flex-col w-screen px-[1rem] h-screen   text-center items-center justify-center dark:bg-white bg-black">
        <div className="text-primary border-b-2 dark:border-black border-white text-[2rem] mb-[1rem] ">
          <span className="dark:text-black text-white">"Our</span> manifesto
          <span className="dark:text-black text-white">."</span>
        </div>

        <div className="dark:text-black text-white">{manifesto}</div>
      </div>
    </>
  );
}
