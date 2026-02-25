class ListNodeOther {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindromeOther(head: ListNodeOther | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // Find the middle
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse the second half
  let prev: ListNode | null = null;
  while (slow !== null) {
    const nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  // Compare both halves
  let firstHalf: ListNode | null = head;
  let secondHalf: ListNode | null = prev;
  while (secondHalf !== null) {
    if (firstHalf!.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
