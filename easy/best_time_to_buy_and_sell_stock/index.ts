function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}

// Runtime
// 9
// ms
// Beats
// 9.96%
// Analyze Complexity
// Memory
// 66.60MB
// Beats
// 17.87%
