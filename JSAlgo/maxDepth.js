// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }

/**

 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // Base case: If the root is null, the depth is 0
    if (root === null) {
        return 0;
    }

    // Recursively find the depth of the left and right subtrees
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    // The depth of the current node is 1 + the maximum depth of its children
    return Math.max(leftDepth, rightDepth) + 1;
};

node1 = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null,null)))

console.log(maxDepth(node1))