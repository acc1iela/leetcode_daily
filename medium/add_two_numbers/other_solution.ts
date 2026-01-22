function addTwoNumbersOther(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next;
}

console.log(
  addTwoNumbersOther(
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
  )
);

// Is what they're doing almost the same?
// The difference is whether or not carry is included in the while loop condition.
// It's good that the code can be shortened a little, and I feel like readability is almost the same.
