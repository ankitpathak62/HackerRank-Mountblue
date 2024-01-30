function appendAndDelete(s, t, k) {
  let commonPrefixLength = 0;
  while (
    commonPrefixLength < Math.min(s.length, t.length) &&
    s[commonPrefixLength] === t[commonPrefixLength]
  ) {
    commonPrefixLength++;
  }

  const totalOperations = s.length + t.length - 2 * commonPrefixLength;

  if (
    (totalOperations <= k && (k - totalOperations) % 2 === 0) ||
    k >= s.length + t.length
  ) {
    return "Yes";
  } else {
    return "No";
  }
}

// Example:
console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); // Output: Yes
console.log(appendAndDelete("aba", "aba", 7)); // Output: Yes
console.log(appendAndDelete("ashley", "ash", 2)); // Output: No
