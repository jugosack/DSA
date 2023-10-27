function updateInventory(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
      let found = false;
  
      for (let j = 0; j < arr1.length; j++) {
        if (arr2[i][1] === arr1[j][1]) { // Compare item names
          arr1[j][0] += arr2[i][0]; // Update the quantity
          found = true;
          break;
        }
      }
  
      if (!found) {
        arr1.push(arr2[i]); // If the item is not found, add it to the inventory
      }
    }
  
    // Sort the inventory by item name
    arr1.sort((a, b) => a[1].localeCompare(b[1]));
  
    return arr1;
  }
  
  // Example inventory lists
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  
  updateInventory(curInv, newInv);


// EXPLANATION
//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). 
//If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.