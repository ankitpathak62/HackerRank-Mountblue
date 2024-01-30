function luckBalance(k, contests) {
  let totalLuck = 0;
  const importantContests = [];

  // Separate contests into important and unimportant
  for (const contest of contests) {
    const [luck, importance] = contest;
    if (importance === 1) {
      importantContests.push(luck);
    } else {
      totalLuck += luck; // Unimportant contests are always won
    }
  }

  // Sort important contests in ascending order
  importantContests.sort((a, b) => a - b);

  // Subtract luck values for the first k important contests
  for (let i = 0; i < importantContests.length; i++) {
    if (i < importantContests.length - k) {
      totalLuck -= importantContests[i];
    } else {
      totalLuck += importantContests[i];
    }
  }

  return totalLuck;
}

// Input
const n = 6;
const k = 3;
const contests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
];

// Output
console.log(luckBalance(k, contests)); // Output: 29
