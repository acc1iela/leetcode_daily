function longestCommonPrefix(stars: string[]): string {
  if (stars.length === 0) return '';
  let prefix = stars[0];
  for (let i = 1; i < stars.length; i++) {
    while (!stars[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}

// Runtime 0ms | Beats 100%
// Memory 55.98MB | Beats 63.00%
