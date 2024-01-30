function howManyGames(p, d, m, s) {
  let gamesCount = 0;

  while (s >= p) {
    s -= p;
    gamesCount++;
    p = Math.max(p - d, m);
  }

  return gamesCount;
}

const result0 = howManyGames(20, 3, 6, 80);
console.log(result0); // Output: 6

const result1 = howManyGames(20, 3, 6, 85);
console.log(result1); // Output: 7
