function lengthOfLastWord(s: string): number {
  const words = s.trim().split(' ');
  return words[words.length - 1].length;
}

// Runtime 0ms | Beats 100%
// Memory 55.62MB | 31.12%s
