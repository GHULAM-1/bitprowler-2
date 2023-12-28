export default function extractingNumbersFromDate(
  dateString: string
): [number, number, number] {
  const dateArray = dateString.split("-");

  if (dateArray.length === 3) {
    const year = parseInt(dateArray[0], 10);
    const month = parseInt(dateArray[1], 10);
    const day = parseInt(dateArray[2], 10);

    if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
      return [year, month, day];
    }
  }

  return [0, 0, 0];
}
