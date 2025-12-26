class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0;
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (l1 !== null || l2 !== null) {
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    current.next = new ListNode(carry % 10);
  }
  return dummyHead.next;
}

console.log(
  addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
  )
);

// Runtime 3ms | Beats 71.69%
// Memory 62.08MB | Beats 64.32%
