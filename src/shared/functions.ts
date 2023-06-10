export const generateArray = (length: number): number[] => {
  const result = [];
  for (let i = 0; i < length; ++i) {
    result.push(i);
  }

  return result;
};
