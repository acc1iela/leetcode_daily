const inorderTraversalOther = (r) =>
  !r ? [] : [...inorderTraversalOther(r.left), r.val, ...inorderTraversalOther(r.right)];
