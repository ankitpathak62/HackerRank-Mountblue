function happyLadybugs(a) {
  let charCount = new Map();
  let underScore = false;

  for (let char of a) {
    if (char === "_") {
      underScore = true;
    } else {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  }

  if (!underScore) {
    for (let i = 1; i < a.length - 1; i++) {
      if (a[i - 1] !== a[i] && a[i] !== a[i + 1]) {
        return "NO";
      }
    }
  }

  if (Array.from(charCount.values()).some((count) => count === 1)) {
    return "NO";
  }

  return "YES";
}
