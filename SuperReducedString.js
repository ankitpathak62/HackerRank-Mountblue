function superReducedString(s) {
  let result = [];
  for (let char of s) {
    if (result.length > 0 && result[result.length - 1] === char) {
      result.pop();
    } else {
      result.push(char);
    }
  }
  if (result.length === 0) {
    return "Empty String";
  } else {
    return result.join("");
  }
}

console.log(superReducedString('aaabccddd')); // Output: "abd"
console.log(superReducedString('aa'));        // Output: "Empty String"
console.log(superReducedString('baab'));
console.log(superReducedString('baabacbcb'));  
