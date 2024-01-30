function circularArrayRotation(a, k, queries) {
    // Calculate the effective number of rotations to avoid unnecessary rotations
    k = k % a.length;

    // Perform the right circular rotation
    const rotatedArray = a.slice(-k).concat(a.slice(0, -k));

    // Retrieve the values at the specified indices
    const result = queries.map(index => rotatedArray[index]);

    return result;
}

const a = [1, 2, 3];
const k = 2;
const queries = [0, 1, 2];

console.log(circularArrayRotation(a, k, queries));  // Output: [2, 3, 1]
