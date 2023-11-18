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
 //Test cases
 // Test Case 1: Valid path with sum 0 (single-node tree)

console.log(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22));  // Output: false

// Test Case 2: No path with sum 1 (single-node tree)
console.log(hasPathSum([1,2,3], 3));  // Output: false

// Test Case 3: Valid path with sum -5 (single-node tree)
console.log(hasPathSum([], 0));  // Output: true

//link: https://leetcode.com/problems/path-sum/