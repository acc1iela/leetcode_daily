type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let result = init;
  for (const num of nums) {
    result = fn(result, num);
  }
  return result;
}

// Runtime 53ms | 19.39%
// Memory 57.50MB | Beats 16.54%
