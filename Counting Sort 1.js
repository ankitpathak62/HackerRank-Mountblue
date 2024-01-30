function countingSort(arr) {
  let frequencyArray = new Array(100).fill(0);
  for (let num of arr) {
    frequencyArray[num]++;
  }
  return frequencyArray;
}
