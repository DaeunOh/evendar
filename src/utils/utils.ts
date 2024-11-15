export const fillStartWithValue = <T>(arr: (T | undefined)[], value: T): (T | undefined)[] => {
  if (arr.length === 0) return [value];

  const emptyIndex = arr.findIndex(item => item == null);
  if (emptyIndex !== -1) {
    const newArr = [...arr];
    newArr[emptyIndex] = value;
    return newArr;
  }

  return [...arr, value];
};

export const getFillIndex = <T>(arr: (T | undefined)[]): number => {
  const emptyIndex = arr.findIndex(item => item == null);
  return emptyIndex !== -1 ? emptyIndex : arr.length;
};
