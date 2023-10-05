function groceriesList() {
  const groceries = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const groceriesMap = new Map();
  for (const grocery of groceries) groceriesMap.set(grocery[0], grocery[1]);
  return groceriesMap;
}
export default groceriesList;
