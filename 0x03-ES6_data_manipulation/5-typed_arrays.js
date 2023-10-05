function createInt8TypedArray(length, pos, val) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  if (pos > length - 1) {
    throw Error('Position outside range');
  }

  view.setInt8(pos, val);

  return view;
}
export default createInt8TypedArray;
