function caesarCipher(s, k) {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (lowerAlphabet.includes(char)) {
            const index = (lowerAlphabet.indexOf(char) + k) % 26;
            result += lowerAlphabet[index];
        } else if (upperAlphabet.includes(char)) {
            const index = (upperAlphabet.indexOf(char) + k) % 26;
            result += upperAlphabet[index];
        } else {
            // Non-alphabetic characters remain unchanged
            result += char;
        }
    }

    return result;
}

// Sample Input
const n = 11;
const s = 'middle-Outz';
const k = 2;

// Output
const encryptedString = caesarCipher(s, k);
console.log(encryptedString); // Output: okffng-Qwvb
