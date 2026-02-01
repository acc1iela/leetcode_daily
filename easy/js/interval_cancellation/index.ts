type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  fn(...args);
  const id = setInterval(() => {
    fn(...args);
  }, t);
  return () => {
    clearInterval(id);
  };
}

// Runtime 74ms | Beats 5.63%
// Memory 55.80MB | Beats 48.73%
