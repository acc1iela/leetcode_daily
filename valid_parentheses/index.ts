function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (!last || map[last] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Runtime 4ms | Beats 60.24%
