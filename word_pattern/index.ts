function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');
  if (words.length !== pattern.length) return false;

  const p2w = new Map<string, string>();
  const w2p = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];

    if ((p2w.get(p) ?? w) !== w) return false;
    if ((w2p.get(w) ?? p) !== p) return false;

    p2w.set(p, w);
    w2p.set(w, p);
  }
  return true;
}

// Runtime 0ms | Beats 100%
// Memory 55.43MB Beats 34.76%
