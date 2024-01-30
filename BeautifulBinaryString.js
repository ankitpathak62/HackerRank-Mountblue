function beautifulBinaryString(b) {
  let moves = 0;

  // Iterate through the binary string
  for (let i = 0; i < b.length - 2; i++) {
    // Check for the occurrence of "010"
    if (b[i] === "0" && b[i + 1] === "1" && b[i + 2] === "0") {
      // Increment the moves count
      moves++;
      // Move the index to skip the next character (since we can't overlap substrings)
      i += 2;
    }
  }

  // Return the minimum moves required
  return moves;
}

// Example 1
console.log(beautifulBinaryString("0101010")); // Output: 2

// Example 2
console.log(beautifulBinaryString("01100")); // Output: 0

// Example 3
console.log(beautifulBinaryString("0100101010")); // Output: 3
