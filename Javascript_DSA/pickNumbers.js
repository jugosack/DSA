function pickingNumbers(a) {
    a.sort((a, b) => a - b); // Sort the input array in ascending order.
    
    let maxCount = 0;
    let currentCount = 0;
    let currentElement = a[0];
    
    for (let i = 0; i < a.length; i++) {
        if (Math.abs(a[i] - currentElement) <= 1) {
            currentCount++;
        } else {
            currentElement = a[i];
            currentCount = 1;
        }
        maxCount = Math.max(maxCount, currentCount);
    }
    
    return maxCount;
}

//Test cases