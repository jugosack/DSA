/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if (rowIndex < 0) {
        return [];
    }

    var output = [];

    for (let i = 0; i <= rowIndex; i++) { //i=0; rowIndex=3; i++=4
        if (i === 0 || i === rowIndex) {
            output[i] = 1; // Set the first and last elements to 1 (the edges of Pascal's Triangle).
        } else {
            // Calculate the values in between using the previous row.
            output[i] = output[i - 1] * (rowIndex - i + 1) / i; // 2 * (3-3+1)/3=2/3
        }
    }

    return output; //[1,3,3,1]
};