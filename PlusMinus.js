function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      minus += 1;
    } else if ((arr[i] == 0)) {
      zero += 1;
    } else {
      plus += 1;
    }
  }
console.log(plus / arr.length);
console.log(minus / arr.length);
console.log(zero / arr.length);
}

