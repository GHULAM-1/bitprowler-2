export function removehyphens(input: string): string {
  const convertedString = input
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return convertedString;
}
