// M-1
// function miniMaxSum(arr) {
//   let maxSum = 0;
//   let minSum = 0;
//   let maxValue = Math.max(...arr);
//   let minValue = Math.min(...arr);
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== minValue) {
//       maxSum = maxSum + arr[i];
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] !== maxValue) {
//       minSum = minSum + arr[i];
//     }
//   }
//   console.log(`${minSum} ${maxSum}`);

// }
// // console.log(maxValue);
// // console.log(arr);

// // console.log(minValue);
// // console.log(arr);

// miniMaxSum([1, 2,  4,3, 5]); // Output: 10 14

//M-2

function miniMaxSum(arr) {
  let arrSum = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    arrSum.push(sum);
  }
  let minSum = Math.min(...arrSum);
  let maxSum = Math.max(...arrSum);
  console.log(`${minSum} ${maxSum}`);
}
