function removeElement(nums: number[], val: number): number {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

/**
 * Runtime 0ms | Beats 100%
 * Memory 55.65MB | Beats 38.63%
 */
