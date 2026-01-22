function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Runtime 0ms | Beast 100%
// Memory 55.00MB | 60.65%
