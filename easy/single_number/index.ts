function singleNumber(nums: number[]): number {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

// Runtime 1ms | Beats 74.10%
// Memory 56.43MB | 85.37%
