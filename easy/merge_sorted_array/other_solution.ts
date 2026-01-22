function mergeOther(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m, j = 0; j < n; i++, j++) nums1[i] = nums2[j];
  nums1.sort((a, b) => a - b);
}

/**
/** This solution is concise but relies on sorting the entire array after copying.
While it passes, it does not take advantage of the fact that both arrays are already sorted and results in a higher time complexity.
*/
