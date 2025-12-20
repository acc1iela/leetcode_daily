// TypeScript

function isPalindromeOther(s: string): boolean {
  const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return newStr === newStr.split('').reverse().join('');
}

console.log(isPalindromeOther('A man, a plan, a canal: Panama'));
console.log(isPalindromeOther('race a car'));
console.log(isPalindromeOther(' '));
