function updateUniqueItems(mapObject) {
  if (!(mapObject instanceof Map)) throw Error('Cannot process');
  for (const [ key, value ] of mapObject.entries()) if (value === 1) mapObject.set(key, 100);
  return mapObject;
}
export default  updateUniqueItems;
