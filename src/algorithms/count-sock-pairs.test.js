import { countSockPairs } from "./countSockPairs";

it("Should count the pairs of the socks", () => {
  expect(countSockPairs([1, 1, 1, 1, 2, 2, 3, 2, 5])).toEqual(3);
});
