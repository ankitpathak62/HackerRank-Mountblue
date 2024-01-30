function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1;

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const totalCost = keyboards[i] + drives[j];
            if (totalCost <= b && totalCost > maxSpent) {
                maxSpent = totalCost;
            }
        }
    }

    return maxSpent;
}

const b1 = 10;
const keyboards1 = [3, 1];
const drives1 = [5, 2, 8];
console.log(getMoneySpent(keyboards1, drives1, b1)); // Output: 9

const b2 = 5;
const keyboards2 = [4];
const drives2 = [5];
console.log(getMoneySpent(keyboards2, drives2, b2)); // Output: -1
