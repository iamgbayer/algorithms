import { reveseString, reverseStringThroughLoop } from "./reverse-string";

it("Should reverse each word correctly", () => {
  expect(reverseString("my name is guilherme")).toEqual("ym eman si emrehliug");
  expect(reverseString("guilherme")).toEqual("emrehliug");

  expect(reverseStringThroughLoop("her name is bia")).toEqual(
    "aib si eman reh"
  );
  expect(reverseStringThroughLoop("type  script")).toEqual("tpircs  epyt");
});
