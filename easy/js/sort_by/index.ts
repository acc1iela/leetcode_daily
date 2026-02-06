type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  return arr.sort((a, b) => fn(a) - fn(b));
}

/**
 * Runtime 131ms beats 5.45%
 * Memory 68.28MB | Beats 99.46%
 */
