function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;

    while (i < c.length - 1) {
        if (i + 2 < c.length && c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }

        jumps += 1;
    }

    return jumps;
}

// Example:
const sampleInput0 = [0, 0, 1, 0, 0, 1, 0];
const result0 = jumpingOnClouds(sampleInput0);
console.log(result0); // Output: 4

const sampleInput1 = [0, 0, 0, 0, 1, 0];
const result1 = jumpingOnClouds(sampleInput1);
console.log(result1); // Output: 3
