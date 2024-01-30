function marsExploration(s) {
  let changedCount = 0;
  for (let i = 0; i < s.length; i += 3) {
    if (s[i] !== "S") {
      changedCount++;
    }
    if (s[i + 1] !== "O") {
      changedCount++;
    }
    if (s[i + 2] !== "S") {
      changedCount++;
    }
  }

  return changedCount;
}
const input0 = "SOSSPSSQSSOR";
console.log(marsExploration(input0)); // Output: 3
const input1 = "SOSSOT";
console.log(marsExploration(input1)); // Output: 1
