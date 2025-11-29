function containsDuplicate(nums: number[]): boolean {
  const duplicateCheck = new Set<number>();

  for (const num of nums) {
    if (duplicateCheck.has(num)) {
      return true;
    }
    duplicateCheck.add(num);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
