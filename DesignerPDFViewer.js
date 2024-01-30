function designerPdfViewer(h, word) {
    // Calculating the maximum height using reduce
    const maxHeight = word.split('').reduce((max, char) => {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        return Math.max(max, h[index]);
    }, 0);

    // Calculating the area of the rectangle
    const area = maxHeight * word.length;

    return area;
}

// Input 1
const heights1 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5, 5];
const word1 = 'abc';
console.log(designerPdfViewer(heights1, word1)); // Output: 9

// Input 2
const heights2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
const word2 = 'zaba';
console.log(designerPdfViewer(heights2, word2)); // Output: 28
