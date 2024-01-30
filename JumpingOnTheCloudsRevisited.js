function jumpingOnClouds(c, k) {
    const n = c.length;
    let energy = 100;
    let currentCloud = 0;

    do {
        currentCloud = (currentCloud + k) % n;
        if (c[currentCloud] === 1) {
            energy -= 2; 
        }

        energy--; 
    } while (currentCloud !== 0);

    return energy;
}
const result = jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);
console.log(result); // Output: 92
