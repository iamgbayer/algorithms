export const reverseString = (string) =>
  string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
