function containsDuplicateSet(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size < nums.length;
}

// Adding the same value to a Set will not overwrite it, but will only increase the size. In other words, if there are no duplicates, we can determine that the number of elements put into the Set is the same as the original number.
// If there are duplicates, the number of elements put into the Set will be smaller than the original (because the duplicates are squashed). This can be determined by set.size < nums.length.
// Smart
