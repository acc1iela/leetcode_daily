function isValidOther(s: string): boolean {
  let stack: string[] = [];
  for (let c of s) {
    if (c === '(' || c === '{' || c === '[') stack.push(c);
    else {
      if (
        stack.length === 0 ||
        (c === ')' && stack.pop() !== '(') ||
        (c === '}' && stack.pop() !== '{') ||
        (c === ']' && stack.pop() !== '[')
      )
        return false;
    }
  }
  return stack.length === 0;
}

console.log(isValidOther('()'));
console.log(isValidOther('()[]{}'));
console.log(isValidOther('(]'));
console.log(isValidOther('([)]'));
console.log(isValidOther('{[]}'));

// The basic logic is the same.
// It might be easier to understand at first glance because it doesn't use map.
// stack.pop() is executed only when c === ')' is true, and since it is evaluated from the left, it is only executed a maximum of once (per character).
