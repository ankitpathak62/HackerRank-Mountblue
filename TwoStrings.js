function twoStrings(s1, s2) {
  const set1 = new Set(s1);
  const set2 = new Set(s2);

  for (let char of set1) {
    if (set2.has(char)) {
      return "YES";
    }
  }

  return "NO";
}

// Test cases
console.log(twoStrings("hello", "world")); // Output: YES
console.log(twoStrings("hi", "world")); // Output: NO
