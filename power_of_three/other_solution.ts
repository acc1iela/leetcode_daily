function isPowerOfThreeOther(n: number): boolean {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 3 == 0) {
      n = n / 3;
    } else {
      return false;
    }
  }
  return true;
}

// Runtime 8ms | Beats 34.62%
// Memory 64.85MB | Beasts 96.79%
