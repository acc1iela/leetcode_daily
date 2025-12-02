function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
    tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
  }

  return Array.from(sMap.entries()).every(([key, value]) => tMap.get(key) === value);
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

// ## Memory
// 58.12MB
// ## Beats
// 59.22%

// ## Runtime
// 7ms
// ## Beats
// 88.39%
