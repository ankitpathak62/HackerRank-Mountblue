function angryProfessor(k, a) {
    const onTimeOrEarly = a.filter(arrivalTime => arrivalTime <= 0).length;

    return onTimeOrEarly < k ? 'YES' : 'NO';
}
const testCases = [
    { k: 3, a: [-1, -3, 4, 2] },
    { k: 2, a: [0, -1, 2, 1] },
];

testCases.forEach(testCase => {
    console.log(angryProfessor(testCase.k, testCase.a));
});
