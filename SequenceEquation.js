function permutationEquation(p) {
  const result = [];

  for (let x = 1; x <= p.length; x++) {
    const indexI = p.indexOf(x) + 1;
    const indexJ = p.indexOf(indexI) + 1;
    result.push(indexJ);
  }

  return result;
}

const inputArray = [2, 3, 1];
const outputArray = permutationEquation(inputArray);
console.log(outputArray);
