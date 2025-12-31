function reverseBitsOther(n: number): number {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    ans |= (n & 1) << (31 - i);
    n >>= 1;
  }

  return ans >>> 0;
}

// Runtime 0ms | Beats 100%
// Memory 41.3MB | Beats 87.5%

// (n & 1) << (31 -i)
// 今見ている1bitが31 - iで一気に反転後の31-iの位置に移動する？

// ビットの位置感覚がなさすぎて難しい。
// 少し競技プログラミング的な書き方な気がする。
