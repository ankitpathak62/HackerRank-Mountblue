// Given an array of integers, find the sum of its elements.



function simpleArraySum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    
    sum += arr[i];
  }
  return sum;
}
console.log(simpleArraySum([1, 2, 3, 4]));
