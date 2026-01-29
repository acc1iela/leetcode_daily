type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<F>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
    return undefined;
  };
}

// Runtime 49ms | Beats 67.23%
// Memory 54.26MB | Beats 92.18%
