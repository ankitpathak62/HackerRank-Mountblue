function repeatedString(s, n) {
    let countInOriginal = 0;
    let totalCount = 0;

    for (let i = 0; i < s.length && i < n; i++) {
        if (s[i] === 'a') {
            countInOriginal++;
        }
    }

    const repeatCount = Math.floor(n / s.length);
    totalCount = countInOriginal * repeatCount;

    const remainingChars = n % s.length;
    for (let i = 0; i < remainingChars; i++) {
        if (s[i] === 'a') {
            totalCount++;
        }
    }

    return totalCount;
}

// Input 0
console.log(repeatedString('aba', 10)); // Output: 7

// Input 1
console.log(repeatedString('a', 1000000000000)); // Output: 1000000000000
