import dateToMonth from "@/utils/dateToMonth";
import extractingNumbersFromDate from "@/utils/extractingNumbersFromDate";
type DateSectionProps = {
  date: string;
};
export default function DateSection({ date }: DateSectionProps) {
  const month = dateToMonth(date);
  const dateNumbers = extractingNumbersFromDate(date);
  return (
    <>
      <div className="text-Mobile-S-Text TABLET:text-Mobile-Text mt-4   ">
        Posted: {`${dateNumbers[2]} ${month} ${dateNumbers[0]}`}
      </div>
    </>
  );
}
