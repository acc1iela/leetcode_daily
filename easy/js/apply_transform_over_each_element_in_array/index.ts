function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}

// runtime 54ms | Beats 8.50%
// Memory 53.76MB | Beats 94.37%
