import { reverseString } from "./reverseString";

it("Should reverse each word correctly", () => {
  expect(reverseString("my name is guilherme")).toEqual("ym eman si emrehliug");
  expect(reverseString("guilherme")).toEqual("emrehliug");
});
