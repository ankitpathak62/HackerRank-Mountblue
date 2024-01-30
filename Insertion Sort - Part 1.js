function insertionSort1(n, arr) {
  const target = arr[n - 1];

  while (arr[--n - 1] > target) {
    arr[n] = arr[n - 1];

    console.log(...arr);
  }

  arr[n] = target;
  console.log(...arr);
}
