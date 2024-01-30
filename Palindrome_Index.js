function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function palindromeIndex(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      // If removing the character at index i makes the string a palindrome, return i
      if (isPalindrome(s.substring(0, i) + s.substring(i + 1))) {
        return i;
      }
      // If removing the character at index s.length - 1 - i makes the string a palindrome, return s.length - 1 - i
      if (
        isPalindrome(
          s.substring(0, s.length - 1 - i) + s.substring(s.length - i)
        )
      ) {
        return s.length - 1 - i;
      }
      // If no solution found, return -1
      return -1;
    }
  }
  // If the string is already a palindrome or has an odd length, return -1
  return -1;
}

// Input
const q = 3;
const queries = ["aaab", "baa", "aaa"];

// Output
for (let i = 0; i < q; i++) {
  console.log(palindromeIndex(queries[i]));
}
