function bigSorting(unsorted) {
    // Custom comparator for numerical sorting of strings
    function compare(a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b); // Lexicographical comparison for strings of equal length
    }

    // Sort the array using the custom comparator
    unsorted.sort(compare);

    return unsorted;
}


const input0 = [
    "31415926535897932384626433832795",
    "1",
    "3",
    "10",
    "3",
    "5"
];
console.log(bigSorting(input0)); // Output should be ['1', '3', '3', '5', '10', '31415926535897932384626433832795']

const input1 = [
    "1",
    "2",
    "100",
    "12303479849857341718340192371",
    "3084193741082937",
    "3084193741082938",
    "111",
    "200"
];
console.log(bigSorting(input1)); // Output should be ['1', '2', '100', '111', '200', '3084193741082937', '3084193741082938', '12303479849857341718340192371']
