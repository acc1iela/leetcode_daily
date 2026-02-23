function addBinary(a: string, b: string): string {
  let carry = 0;
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = digitA + digitB + carry;
    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
    i--;
    j--;
  }
  return result;
}

/* *
  runtime 2ms | Beats 51.77%
  memory 56.29mb | Beats 81.17%
*/
