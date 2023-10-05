export const weakMap = new WeakMap();

export function queryAPI(ep) {
  if (weakMap.has(ep)) {
    const val = weakMap.get(ep);
    if (val >= 4) throw Error('Endpoint load is high');
    weakMap.set(ep, weakMap.get(ep) + 1);
  } else {
    weakMap.set(ep, 1);
  }
}
