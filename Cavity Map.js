function cavityMap(grid) {
  const n = grid.length;

  const map = grid.map((row) => row.split("").map(Number));

  function isCavity(i, j) {
    if (i === 0 || j === 0 || i === n - 1 || j === n - 1) {
      return false;
    }

    const depth = map[i][j];
    return (
      depth > map[i - 1][j] &&
      depth > map[i + 1][j] &&
      depth > map[i][j - 1] &&
      depth > map[i][j + 1]
    );
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isCavity(i, j)) {
        map[i][j] = "X";
      }
    }
  }

  const result = map.map((row) => row.join(""));

  return result;
}
