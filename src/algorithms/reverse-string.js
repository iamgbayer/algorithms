export const reverseString = (string) =>
  string
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

export const reverseStringThroughLoop = (string) => {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
};
