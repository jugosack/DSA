var removeInvalidParentheses = function(s) {

}
//Test cases
console.log(removeInvalidParentheses("()())()"));
// Expected output: ["(())()", "()()()"]

console.log(removeInvalidParentheses("(a)())()"));
// Expected output: ["(a())()", "(a)()()"]

console.log(removeInvalidParentheses(")("));
// Expected output: [""]

console.log(removeInvalidParentheses("()"));
// Expected output: ["()"]

console.log(removeInvalidParentheses("()("));
// Expected output: ["()"]