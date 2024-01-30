// This is a function named 'minimumDistances' that takes an array 'a' as input.
function minimumDistances(a) {
    // Declare a variable 'minDistance' and set it to positive infinity.
    let minDistance = Infinity;
/* Setting minDistance to Infinity is a common technique used to initialize a variable that will 
be used to track the minimum distance in a way that ensures any valid distance found during the 
iteration will be smaller than the initial value. */
    // Declare an empty object named 'indexMap'.
    let indexMap = {};

    // Start a loop that iterates through each element of the array 'a'.
    for (let i = 0; i < a.length; i++) {
        // Check if the current element 'a[i]' is already in 'indexMap'.
        if (a[i] in indexMap) {
            // If yes, get the previous index where 'a[i]' was found.
            let prevIndex = indexMap[a[i]];

            // Calculate the distance between the current index and the previous index.
            let distance = i - prevIndex;

            // Update 'minDistance' to be the minimum of its current value and the calculated distance.
            minDistance = Math.min(minDistance, distance);
        }

        // Update 'indexMap' to store the current index of the element 'a[i]'.
        indexMap[a[i]] = i;
    }

    // After the loop, check if 'minDistance' is still positive infinity.
    // If it is, return -1, meaning no matching elements were found.
    // Otherwise, return the calculated minimum distance.
    return minDistance !== Infinity ? minDistance : -1;
}

// Example usage:
// Create an array 'a' with some numbers.
const a = [7, 1, 3, 4, 1, 7];

// Call the 'minimumDistances' function with the array 'a' and log the result to the console.
console.log(minimumDistances(a)); // Output: 3
