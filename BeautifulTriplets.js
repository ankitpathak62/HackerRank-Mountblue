/* 
function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] - arr[i] === d) {
                for (let k = j + 1; k < arr.length; k++) {
                    if (arr[k] - arr[j] === d) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
}

// Input
const n = 7;
const d = 3;
const arr = [1, 2, 4, 5, 7, 8, 10];

// Output
const result = beautifulTriplets(d, arr);
console.log(result); // Output: 3
*/

function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + 2 * d)) {
            count++;
        }
    }

    return count;
}