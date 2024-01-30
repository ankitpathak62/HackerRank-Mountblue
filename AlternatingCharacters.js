function alternatingCharacters(s) {
    let deletions = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            deletions++;
        }
    }

    return deletions;
}

//  Input
const queries = 5;
const strings = ["AAAA", "BBBBB", "ABABABAB", "BABABA", "AAABBB"];

//  Output
for (let i = 0; i < queries; i++) {
    console.log(alternatingCharacters(strings[i]));
}
