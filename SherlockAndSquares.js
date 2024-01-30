function squares(a, b) {
    // Find the square root of the lower and upper bounds
    let lowerRoot = Math.ceil(Math.sqrt(a));
    let upperRoot = Math.floor(Math.sqrt(b));

    // Calculate the count of square integers in the range
    let count = upperRoot - lowerRoot + 1;

    return count;
}


console.log(squares(3, 9));  // Output: 2
console.log(squares(17, 24));  // Output: 0
