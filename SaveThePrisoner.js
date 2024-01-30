
function saveThePrisoner(n, m, s) {
    const remainder = m % n;
let finalPosition = (s - 1 + remainder) % n;
finalPosition = finalPosition === 0 ? n : finalPosition;

    return finalPosition;
}
console.log(saveThePrisoner(5, 2, 1)); // Output: 2
console.log(saveThePrisoner(5, 2, 2)); // Output: 3