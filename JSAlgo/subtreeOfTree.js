// https://leetcode.com/problems/subtree-of-another-tree/description/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSameTree = function (s, t) {
  if (s === null && t === null) {
    return true;
  }
  if (s === null || t === null) {
    return false;
  }
  // Check if the current nodes are the same and recursively check left and right subtrees
  return (
    s.val === t.val &&
    isSameTree(s.left, t.left) &&
    isSameTree(s.right, t.right)
  );
};

// Main function to check if subRoot is a subtree of root
var isSubtree = function (root, subRoot) {
  if (root === null) {
    return false;
  }
  // If the trees rooted at root and subRoot are identical, return true
  if (isSameTree(root, subRoot)) {
    return true;
  }
  // Otherwise, recursively check left and right subtrees
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const root1 = new TreeNode(3, new TreeNode(4, new TreeNode(1, null, null), new TreeNode(2, null, null)), new TreeNode(5, null, null))
const subRoot1 = new TreeNode(4, new TreeNode(1, null, null), new TreeNode(2, null, null))

console.log(isSubtree(root1, subRoot1));
