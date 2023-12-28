export default function HighLightSection({
  oneLinerFirst,
  oneLinerSecond,
}: {
  oneLinerFirst: string;
  oneLinerSecond: string;
}) {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-black dark:bg-white text-Mobile-L-Head">
        <div className="text-primary border-b-2 dark:border-black border-white">
          <span className="dark:text-black text-white">"{oneLinerFirst}</span>{" "}
          {oneLinerSecond}
          <span className="dark:text-black text-white">."</span>
        </div>
      </div>
    </>
  );
}
