export const countSockPairs = (ar) => {
  let drawer = {};
  let pairs = 0;

  for (let index = 0; index < ar.length; index++) {
    let sock = ar[index];

    if (!drawer[sock]) {
      drawer[sock] = 1;
    } else if (drawer.hasOwnProperty(sock)) {
      drawer[sock] += 1;
    }
  }

  Object.values(drawer).forEach((sock) => {
    pairs += Math.floor(sock / 2);
  });

  return pairs;
};
