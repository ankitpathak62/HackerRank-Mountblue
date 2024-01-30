function theLoveLetterMystery(s) {
  let operations = 0;
  const length = s.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    const diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(length - i - 1));
    operations += diff;
  }

  return operations;
}

const q = 4;
const queries = ["abc", "abcba", "abcd", "cba"];

for (const query of queries) {
  const result = theLoveLetterMystery(query);
  console.log(result);
}
