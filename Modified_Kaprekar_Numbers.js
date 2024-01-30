function kaprekarNumbers(p, q) {
  let kaprekarArr = [];

  for (let i = p; i <= q; i++) {
    if (isModifiedKaprekar(i)) {
      kaprekarArr.push(i);
    }
  }

  if (kaprekarArr.length > 0) {
    console.log(kaprekarArr.join(" "));
  } else {
    console.log("INVALID RANGE");
  }
}
