function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 < y2 || (y1 === y2 && m1 < m2) || (y1 === y2 && m1 === m2 && d1 <= d2)) {
        // Book returned on or before the expected return date
        return 0;
    } else if (y1 === y2 && m1 === m2) {
        // Book returned after the due date but within the same month
        return 15 * (d1 - d2);
    } else if (y1 === y2 && m1 > m2) {
        // Book returned after the due month but within the same year
        return 500 * (m1 - m2);
    } else {
        // Book returned after the expected calendar year
        return 10000;
    }
}
const result = libraryFine(9, 6, 2015, 6, 6, 2015);
console.log(result); // Output: 45
