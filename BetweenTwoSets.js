function getTotalX(a, b) {
  const maxA = Math.max(...a);
  const minB = Math.min(...b);
  let count = 0;
  for (let i = maxA; i <= minB; i++) {
    /* The line is saying: "Start a loop with a counter variable i set to the maximum value from array a. Keep looping as long as i is less than or equal to the minimum value from array b. In each iteration, increase the value of i by 1." This loop is designed to go through a range of numbers from maxA to minB. */
    const isFactorOfA = a.every((num) => i % num === 0);
    /* The every method is a built-in array method in JavaScript. It checks if every element in an array satisfies a given condition. */
    const isFactorOfB = b.every((num) => num % i === 0);
    if (isFactorOfA && isFactorOfB) {
      count++;
    }
  }

  return count;
}
let arr1 = [2, 4];
let arr2 = [16, 32, 96];
console.log(getTotalX(arr1, arr2));
