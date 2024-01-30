function strangeCounter(t) {
  let counterStart = 3;

  while (t > counterStart) {
    t -= counterStart;
    counterStart *= 2;
  }

  return counterStart - t + 1;
}

// Example :
const result = strangeCounter(10);
console.log(result);
