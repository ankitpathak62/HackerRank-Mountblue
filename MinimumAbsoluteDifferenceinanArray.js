
function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    return minDiff;
}
