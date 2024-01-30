function chocolateFeast(n, c, m) {
  let chocolatesBought = Math.floor(n / c);
  let wrappers = chocolatesBought;
  while (wrappers >= m) {
    const freeChocolates = Math.floor(wrappers / m);
    chocolatesBought += freeChocolates;
    wrappers = freeChocolates + (wrappers % m);
  }

  return chocolatesBought;
}

// Test cases
console.log(chocolateFeast(10, 2, 5)); // Output: 6
console.log(chocolateFeast(12, 4, 4)); // Output: 3
console.log(chocolateFeast(6, 2, 2)); // Output: 5
