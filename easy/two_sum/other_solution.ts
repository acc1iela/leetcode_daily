function twoSumObject(nums: number[], target: number): number[] {
  const map: Record<number, number> = Object.create(null);

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }

  return [];
}

console.log(twoSumObject([2, 7, 11, 15], 9));

// ## my thoughts
// I hadn't thought of Object.create(null). A competitive programming tip?
// Apparently, if you use Object.create(null), there's no prototype, meaning there's no key collision with "toString" or "__proto__".
// It seems like it can be used as a lightweight hash without using a Map.
// It seems like it would be confusing in practice, but it might be good to remember for competitive programming.
