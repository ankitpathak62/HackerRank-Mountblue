function fairRations(B) {
    let loaves = 0;

    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 !== 0) {
            B[i]++;
            B[i + 1]++;
            loaves += 2;
        }
    }

    // Checking if all counts are even
    if (B.every(count => count % 2 === 0)) {
        return loaves.toString();
    } else {
        return 'NO';
    }
}

// Example :
const result1 = fairRations([2, 3, 4, 5, 6]);
console.log(result1); // Output: 4

const result2 = fairRations([1, 2]);
console.log(result2); // Output: NO
