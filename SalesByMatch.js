function sockMerchant(n, ar) {
  const colorCount = {};
  for (let i = 0; i < n; i++) {
    const color = ar[i];
    colorCount[color] = (colorCount[color] || 0) + 1;
  }
  let totalPairs = 0;
  for (const color in colorCount) {
    const pairs = Math.floor(colorCount[color] / 2);
    totalPairs += pairs;
  }

  return totalPairs;
}
const n = 7;
const ar = [1, 2, 1, 2, 1, 3, 2];
const result = sockMerchant(n, ar);
console.log(result); // Output: 2


// Method : 2
// function sockMerchant(n, ar) {
//   const colorCount = new Map();
//   ar.forEach((color) => {
//     colorCount.set(color, (colorCount.get(color) || 0) + 1);
//   });
//   let totalPairs = 0;
//   colorCount.forEach((count) => {
//     totalPairs += Math.floor(count / 2);
//   });

//   return totalPairs;
// }
// const n = 7;
// const ar = [1, 2, 1, 2, 1, 3, 2];
// const result = sockMerchant(n, ar);
// console.log(result); // Output: 2
