export default function dateToMonth(dateString: string): string {
  const dateArray = dateString.split("-");

  if (dateArray.length === 3) {
    const monthNumber = parseInt(dateArray[1], 10);

    if (monthNumber >= 1 && monthNumber <= 12) {
      const months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      return months[monthNumber - 1];
    }
  }

  return "February";
}
