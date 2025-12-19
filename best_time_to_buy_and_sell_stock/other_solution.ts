/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

// Number.MAX_VALUE is used to obtain the largest finite number that JS can handle.
// Due to the constraints of the problem, 0 <= prices[i] <= 10^4 is at most 10,000.
// This will always be true the first time through the loop.

// Essentially, it's the same as Infinity.

// Is it the same thing, just using different algorithms? I think.

// The rest is just normal conditional branching.
// The lowest price and profit cannot be updated on the same day.
