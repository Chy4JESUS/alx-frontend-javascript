function cleanSet(set, startString) {
  let resultString = '';
  if (!startString || !startString.length) return resultString;
  set.forEach((item) => {
    if (item && item.startsWith(startString)) resultString += `${item.slice(startString.length)}-`;
  });
  return resultString.slice(0, resultString.length - 1);
}
export default cleanSet;
