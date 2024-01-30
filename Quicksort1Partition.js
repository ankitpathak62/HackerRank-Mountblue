function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
     }
  
    let pivot = arr[0];
    let lesser = [];
    let greater = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lesser.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }
  
    return quickSort(lesser).concat(pivot, quickSort(greater));
  }
  
  let sortedArray = quickSort([5, 7, 4, 3, 8]);
  console.log(sortedArray);
  