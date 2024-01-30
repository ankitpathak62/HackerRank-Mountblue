function decentNumber(n) {
  let ans5 = -1;

  for (let i = 0; i * 3 <= n; i++) {
    let tot = n - 3 * i;
    if (tot % 5 === 0) {
      ans5 = 3 * i;
    }
  }

  if (ans5 === -1) {
    console.log("-1");
  } else {
    let result = "";
    for (let i = 0; i < ans5; i++) {
      result += "5";
    }
    for (let i = 0; i < n - ans5; i++) {
      result += "3";
    }
    console.log(result);
  }
}
