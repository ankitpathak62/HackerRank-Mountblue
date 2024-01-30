/*
Given an array of integers and a positive integer k,
determine the number of  (i, j) pairs where i<j  and ar[i] + ar[j] is divisible by .
Example :
ar = [ 1, 2, 3, 4, 5, 6]
k = 5
Three pairs meet the criteria:  [ 1,4], [2, 3] and [ 4,6].
*/

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }

    return count;
}
const n = 6;
const k = 5;
const ar = [1, 2, 3, 4, 5, 6];
const result = divisibleSumPairs(n, k, ar);
console.log(result);