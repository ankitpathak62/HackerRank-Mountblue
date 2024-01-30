function pickingNumbers(a) {
  let frequencyMap = new Map();

  for (let num of a) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let maxSubarrayLength = 0;

  for (let num of frequencyMap.keys()) {
    maxSubarrayLength = Math.max(
      maxSubarrayLength,
      frequencyMap.get(num) + (frequencyMap.get(num + 1) || 0)
    );
  }

  return maxSubarrayLength;
}

// Input 1
const arr0 = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(arr0)); // Output: 3

// Input 2
const arr1 = [1, 2, 2, 3, 1, 2];
console.log(pickingNumbers(arr1)); // Output: 5
