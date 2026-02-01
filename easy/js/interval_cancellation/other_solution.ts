type JSONValueOther =
  | null
  | boolean
  | number
  | string
  | JSONValueOther[]
  | { [key: string]: JSONValueOther };
type FnOther = (...args: JSONValueOther[]) => void;

function cancellableOther(fn: FnOther, args: JSONValueOther[], t: number): Function {
  fn(...args);

  const intervalID: ReturnType<typeof setInterval> = setInterval(() => fn(...args), t);
  const clearFn: Function = () => clearInterval(intervalID);

  return clearFn;
}
