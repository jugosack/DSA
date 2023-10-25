function permAlone(str) {
    // Helper function to swap elements at two positions in an array
    function swap(arr, index1, index2) {
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
    }
  
    // Helper function to generate all permutations
    function generatePermutations(arr, n) {
      if (n === 1) {
        const permutation = arr.join('');
        if (!/(.)\1/.test(permutation)) {
          // Check if there are consecutive repeated letters
          permutations.push(permutation);
        }
      } else {
        for (let i = 0; i < n; i++) {
          generatePermutations(arr, n - 1);
          if (n % 2 === 0) {
            swap(arr, i, n - 1);
          } else {
            swap(arr, 0, n - 1);
          }
        }
      }
    }
  
    // Split the input string into an array of characters
    let arr = str.split('');
    let permutations = [];
  
    generatePermutations(arr, arr.length);
  
    return permutations.length;
  }
  
  console.log(permAlone('aab')); // Output: 2
  