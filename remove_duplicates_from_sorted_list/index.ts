// Definition fo r singly-linked list.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

// Scan the list from the beginning with node.
// The difference from my solution is that the conditions are all in one place.
// It's a little easier to read because it doesn't use continue.

// But isn't the nested if statement a little harder to read? (I guess it doesn't make much diff
