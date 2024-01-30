function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let segmentSum = s.slice(i, i + m).reduce((sum, num) => sum + num, 0);
    if (segmentSum === d) {
      count++;
    }
  }

  return count;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // Output: 2
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)); // Output: 0
console.log(birthday([4], 4, 1)); // Output: 1
