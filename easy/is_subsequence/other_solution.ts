function isSubsequenceOther(s: string, t: string): boolean {
  let sIndx = 0;
  let tIndx = 0;
  while (sIndx < s.length && tIndx < t.length) {
    if (s[sIndx] === t[tIndx]) {
      sIndx++;
    }
    tIndx++;
  }
  return sIndx === s.length;
}
