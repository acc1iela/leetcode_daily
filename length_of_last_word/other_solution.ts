function lengthOfLastWord(s: string): number {
  const str = s.trim();
  let length = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str[i];
    if (ch !== ' ') length++;
    else break;
  }
  return length;
}
