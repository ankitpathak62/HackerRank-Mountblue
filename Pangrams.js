function pangrams(s) {
    // Convert the input string to lowercase
    s = s.toLowerCase();

    // Create a Set to store unique letters in the string
    let letters = new Set();

    // Iterate through each character in the string
    for (let char of s) {
        // Check if the character is an alphabet letter
        if (/[a-z]/.test(char)) {
            // Add the letter to the Set
            letters.add(char);
        }
    }

    // Check if the Set contains all 26 letters of the alphabet
    if (letters.size === 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

// Example 1
console.log(pangrams("We promptly judged antique ivory buckles for the next prize")); // Output: pangram

// Example 2
console.log(pangrams("We promptly judged antique ivory buckles for the prize")); // Output: not pangram
