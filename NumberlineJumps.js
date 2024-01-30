// function kangaroo(x1, v1, x2, v2) {
//     if (x1 === x2 && v1 === v2) {
//         return 'YES';
//     }
//     if (v1 === v2) {
//         return 'NO';
//     }
//     if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
//         return 'YES';
//     } else {
//         return 'NO';
//     }
// }
// console.log(kangaroo(0, 3, 4, 2)); // Output: 'YES'
// console.log(kangaroo(0, 2, 5, 3)); // Output: 'NO'


function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return 'NO';
    }
    const k = (x2 - x1) / (v1 - v2);
    if (Number.isInteger(k) && k >= 0) {
        return 'YES';
    } else {
        return 'NO';
    }
}
console.log(kangaroo(0, 3, 4, 2)); // Output: 'YES'
console.log(kangaroo(0, 2, 5, 3)); // Output: 'NO'
