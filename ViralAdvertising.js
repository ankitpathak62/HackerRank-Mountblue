function viralAdvertising(n) {
    let shared = 5; 
    let cumulativeLikes = 0;

    for (let day = 1; day <= n; day++) {
        const liked = Math.floor(shared / 2);
        cumulativeLikes += liked;
        shared = liked * 3;
    }

    return cumulativeLikes;
}
const result = viralAdvertising(3);
console.log(result); // Output: 9
