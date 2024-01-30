function separateNumbers(s) {
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
      const start = s.slice(0, i);
      let num = BigInt(start);
      let built = '';
      while (built.length < s.length) built += num++;
      if (built === s) return console.log("YES", start);
    }
    console.log("NO");
  }
  
  // Examples :
  const input0 = '1234';
  const input1 = '91011';
  const input2 = '99100';
  const input3 = '101103';
  const input4 = '010203';
  const input5 = '999100010001';
  const input6 = '1';
  
  separateNumbers(input0);
  separateNumbers(input1);
  separateNumbers(input2);
  separateNumbers(input3);
  separateNumbers(input4);
  separateNumbers(input5);
  separateNumbers(input6);
  