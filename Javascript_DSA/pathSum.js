
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    // Base case: if the root is null, return false
    if (!root) {
        return false;
    }
 // Check if the current node is a leaf
 if (!root.left && !root.right) {
    return root.val === targetSum;
}
 // Recursively check the left and right subtrees
 const leftPath = hasPathSum(root.left, targetSum - root.val);
 const rightPath = hasPathSum(root.right, targetSum - root.val);

 // Return true if there is a path in either the left or right subtree
 return leftPath || rightPath;
 };
// Test cases
// Test Case 1: Valid path with sum 22
var root1 = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
console.log(hasPathSum(root1, 22));  // Output: true

// Test Case 2: No path with sum 5
var root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(hasPathSum(root2, 5));   // Output: false

// Test Case 3: Empty tree
var root3 = null;
console.log(hasPathSum(root3, 0));  // Output: false

//link: https://leetcode.com/problems/path-sum/