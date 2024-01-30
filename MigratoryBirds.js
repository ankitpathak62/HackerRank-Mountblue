function migratoryBirds(arr) {
  const frequencyMap = {};
  arr.forEach((type) => {
    if (frequencyMap[type]) {
      frequencyMap[type]++;
    } else {
      frequencyMap[type] = 1;
    }
  });
  let maxFrequency = 0;
  let maxFrequencyBirdType;

  for (const type in frequencyMap) {
    if (frequencyMap[type] > maxFrequency) {
      maxFrequency = frequencyMap[type];
      maxFrequencyBirdType = type;
    }
  }

  let smallestId = Infinity;
  for (const type in frequencyMap) {
    if (frequencyMap[type] === maxFrequency) {
      smallestId = Math.min(smallestId, type);
    }
  }
  return smallestId;
}
