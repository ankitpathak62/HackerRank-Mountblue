function stringConstruction(s) {
  // Count the number of unique characters in the string
  const uniqueCharacters = new Set(s);

  // The minimum cost is the number of unique characters
  const cost = uniqueCharacters.size;

  return cost;
}

// Input
const n = 2;
const strings = ["abcd", "abab"];

// Output
for (let i = 0; i < n; i++) {
  const cost = stringConstruction(strings[i]);
  console.log(cost);
}
