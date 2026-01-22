function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(current, i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// ## To be honest, I feel like TypeScript isn't really necessary for this.
