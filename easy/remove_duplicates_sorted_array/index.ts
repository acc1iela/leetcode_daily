function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
}

/**
 * runtime 1ms | 57.14%
 * memory 59.12MB | 27.83%
 */
