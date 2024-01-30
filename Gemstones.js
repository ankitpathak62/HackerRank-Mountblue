function gemstones(arr) {
  let mineralSet = new Set(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const currentRockSet = new Set(arr[i]);

    mineralSet = new Set(
      [...mineralSet].filter((mineral) => currentRockSet.has(mineral))
    );
  }

  return mineralSet.size;
}

// Example :
const sampleInput = ["abcdde", "baccd", "eeabg"];
const result = gemstones(sampleInput);
console.log(result); // Output: 2
