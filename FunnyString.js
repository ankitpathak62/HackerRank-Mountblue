function funnyString(s) {
  const asciiValues = s.split("").map((char) => char.charCodeAt(0));

  const reversedAsciiValues = [...asciiValues].reverse();

  const differencesOriginal = calculateDifferences(asciiValues);

  const differencesReversed = calculateDifferences(reversedAsciiValues);

  const isFunny = arraysAreEqual(differencesOriginal, differencesReversed);

  return isFunny ? "Funny" : "Not Funny";
}

function calculateDifferences(arr) {
  const differences = [];
  for (let i = 0; i < arr.length - 1; i++) {
    differences.push(Math.abs(arr[i] - arr[i + 1]));
  }
  return differences;
}

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Input
const q = 2;
const queries = ["acxz", "bcxz"];

// Output
for (let i = 0; i < q; i++) {
  console.log(funnyString(queries[i]));
}
