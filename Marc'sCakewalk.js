function marcsCakewalk(calorie) {
    
    calorie.sort((a, b) => b - a);

    let miles = 0;

    
    for (let i = 0; i < calorie.length; i++) {
        miles += Math.pow(2, i) * calorie[i];
    }

    return miles;
}

const calories1 = [1, 3, 2];
console.log(marcsCakewalk(calories1)); // Output: 11

const calories2 = [7, 4, 9, 6];
console.log(marcsCakewalk(calories2)); // Output: 79
