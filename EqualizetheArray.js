function equalizeArray(arr) {
    // Count the frequency of each element
    const frequencyMap = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Find the element with the maximum frequency
    let maxFrequency = 0;
    for (const key in frequencyMap) {
        if (frequencyMap[key] > maxFrequency) {
            maxFrequency = frequencyMap[key];
        }
    }

    // Calculate the minimum number of deletions required
    const minDeletions = arr.length - maxFrequency;

    return minDeletions;
}

const input = [3, 3, 2, 1, 3];
console.log(equalizeArray(input)); // Output should be 2
