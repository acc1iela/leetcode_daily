// Do not return anything, modify nums in-place instead.

function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }
}

// runtime 0ms | Beats 100%
// Memory 61.34MB Beats 35.71%
