function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => b - a);

    for (let i = 0; i < sticks.length - 2; i++) {
        if (sticks[i] < sticks[i + 1] + sticks[i + 2]) {
            return [sticks[i + 2], sticks[i + 1], sticks[i]];
        }
    }

    return [-1];
}

//  Input 0
const sticks1 = [1, 1, 1, 3, 3];
console.log(maximumPerimeterTriangle(sticks1)); // Output: [1, 3, 3]

//  Input 1
const sticks2 = [1, 2, 3];
console.log(maximumPerimeterTriangle(sticks2)); // Output: [-1]

// Input 2
const sticks3 = [1, 1, 1, 2, 3, 5];
console.log(maximumPerimeterTriangle(sticks3)); // Output: [1, 1, 1]
