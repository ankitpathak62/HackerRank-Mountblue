function compareTriplets(a, b) {
  let aliceTotal = 0;
  let bobTotal = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceTotal++;
    } else if (b[i] > a[i]) {
      bobTotal++;
    }
  }
  return [aliceTotal, bobTotal];
}

console.log(compareTriplets([1,3,4], [4, 1, 3]))
