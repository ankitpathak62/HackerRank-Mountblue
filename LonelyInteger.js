function lonelyinteger(a) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result ^= a[i];
  }

  return result;
}

// Input 0
const input0 = [1];
console.log(lonelyinteger(input0)); // Output: 1

// Input 1
const input1 = [1, 1, 2];
console.log(lonelyinteger(input1)); // Output: 2

// Input 2
const input2 = [0, 0, 1, 2, 1];
console.log(lonelyinteger(input2)); // Output: 2
