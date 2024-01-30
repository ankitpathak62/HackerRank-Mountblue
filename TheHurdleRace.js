function hurdleRace(k, height) {
    const maxHurdleHeight = Math.max(...height);
 const dosesNeeded = Math.max(0, maxHurdleHeight - k);

    return dosesNeeded;
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2])); 
