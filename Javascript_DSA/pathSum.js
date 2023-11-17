/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {

 };
 //Test cases
 // Test Case 1: Valid path with sum 22
var root1 = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
console.log(hasPathSum(root1, 22));  // Output: true

// Test Case 2: No path with sum 5
var root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(hasPathSum(root2, 5));   // Output: false

// Test Case 3: Empty tree
var root3 = null;
console.log(hasPathSum(root3, 0));  // Output: false

// Test Case 4: Valid path with sum 6
var root4 = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
console.log(hasPathSum(root4, 6));   // Output: true

// Test Case 5: Valid path with sum 1 (single-node tree)
var root5 = new TreeNode(1);
console.log(hasPathSum(root5, 1));   // Output: true