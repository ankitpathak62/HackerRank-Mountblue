function countingValleys(steps, path) {
    let a = 0; // Current altitude
    let v = 0; // Number of valleys traversed

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            a++; // Going uphill
        } else {
            a--; // Going downhill
        }

        // Check if a valley is completed 
        if (path[i] === 'U' && a === 0) {
            v++;
        }
    }

    return v;
}

// Example usage:
const steps = 8;
const path = 'UDDDUDUU';
const result = countingValleys(steps, path);
console.log(result); // Output: 1
