export const getFibonacci = (number) => {
  const array = [0, 1];
  for (let index = 2; index < number; index++) {
    array[index] = array[index - 2] + array[index - 1];
  }

  return array;
};
