function findDigits(n) {
    // Converting the integer to a string
    const nString = n.toString();
    
    // Initializing a counter for divisors
    let divisorCount = 0;
    
    // Iterating through each digit in the string
    for (let i = 0; i < nString.length; i++) {
        // Convert the digit back to an integer
        const digit = parseInt(nString[i]);
        
        // Checking if the digit is a divisor of n
        if (digit !== 0 && n % digit === 0) {
            divisorCount++;
        }
    }      
    
    return divisorCount;
}

// Sample Input
const t = 2;
const testCases = [12, 1012];

// Sample Output
for (let i = 0; i < t; i++) {
    const result = findDigits(testCases[i]);
    console.log(result);
}
