class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  // 1) find middle (slow)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow!.next;
  }

  let second = reverseList(slow);

  let first: ListNode | null = head;
  let p2: ListNode | null = second;

  while (p2) {
    if (first!.val !== p2.val) return false;
    first = first!.next;
    p2 = p2.next;
  }

  return true;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

/**
 * runtime 4ms | Beats 74.35%
 * Memory 76.24MB | Beats 84.82%
 */
