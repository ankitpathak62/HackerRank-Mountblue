function gridChallenge(grid) {
    const n = grid.length;

    // Step 1: Sort each row alphabetically
    for (let i = 0; i < n; i++) {
        grid[i] = grid[i].split('').sort().join('');
    }

    // Step 2: Transpose the grid
    const transposedGrid = Array.from({ length: n }, (_, col) => grid.map(row => row[col]));

    // Step 3: Check if columns are in ascending order
    for (let i = 0; i < n; i++) {
        if (!isAlphabetical(transposedGrid[i])) {
            return 'NO';
        }
    }

    return 'YES';
}

// Helper function to check if an array is in ascending alphabetical order
function isAlphabetical(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// Sample Input
const grid = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];

// Sample Output
console.log(gridChallenge(grid)); // Output: YES
