type Ff = (...p: any[]) => any;

function debounceOther(fn: Ff, t: number): Ff {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
}
