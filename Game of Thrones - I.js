function gameOfThrones(s) {
  const letters = new Map();

  for (const char of s) {
    if (letters.has(char)) {
      letters.set(char, letters.get(char) + 1);
    } else {
      letters.set(char, 1);
    }
  }

  let odd = 0;
  let even = 0;

  for (const frequency of letters.values()) {
    if (frequency % 2 === 1) {
      odd++;
      continue;
    }

    if (frequency % 2 === 0) {
      even++;
    }
  }

  if (odd > 1) {
    return "NO";
  } else {
    return "YES";
  }
}
