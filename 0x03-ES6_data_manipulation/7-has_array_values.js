function hasValuesFromArray(set, arrays) {
  return arrays.every((array) => set.has(array));
}
export default hasValuesFromArray;
