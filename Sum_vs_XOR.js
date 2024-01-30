function sumXor(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      count += 1;
    }
    n = Math.floor(n / 2);
  }

  const result = Math.pow(2, count);

  return result;
}

// Example :
console.log(sumXor(5)); // Output: 2
console.log(sumXor(10)); // Output: 4
