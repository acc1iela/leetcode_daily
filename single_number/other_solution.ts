function singleNumberOther(nums: number[]): number {
    return nums.reduce((prev, val) => prev ^ val, 0)
};
