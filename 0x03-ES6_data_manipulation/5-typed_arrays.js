export default function createInt8TypedArray(len, pos, val) {
  if (typeof len !== 'number' || typeof pos !== 'number' || typeof val !== 'number') {
    return new DataView(new ArrayBuffer(0));
  }

  if (pos >= len || pos < 0) {
    throw new RangeError('Position outside range');
  }

  const buffer = new ArrayBuffer(len);
  const view = new DataView(buffer);

  view.setInt8(pos, val);

  return view;
}
