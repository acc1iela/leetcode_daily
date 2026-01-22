function isPalindrome(s: string): boolean {
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedString === cleanedString.split('').reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));

// Another solution uses reverse() for simplicity,
// but this creates extra arrays and strings.
// A two-pointer approach avoids extra space and is more efficient.

function isPalindrome2(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  const isAlphanumeric = (char: string) => {
    return /^[a-zA-Z0-9]$/.test(char);
  };
  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// The first solution is neater.
