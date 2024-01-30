function hackerrankInString(s) {
    const target = "hackerrank";
    let index = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === target[index]) {
            index++;
        }

        if (index === target.length) {
            return "YES";
        }
    }

    return "NO";
}

// Input 0
console.log(hackerrankInString("hereiamstackerrank")); // Output: YES
console.log(hackerrankInString("hackerworld")); // Output: NO

// Input 1
console.log(hackerrankInString("hhaacckkekraraannk")); // Output: YES
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt")); // Output: NO
