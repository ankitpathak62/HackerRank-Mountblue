function gradingStudents(grades) {
    const ROUNDING_THRESHOLD = 3;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            continue;
        }
        const nextMultipleOf5 = Math.ceil(grades[i] / 5) * 5;
        if (nextMultipleOf5 - grades[i] < ROUNDING_THRESHOLD) {
            grades[i] = nextMultipleOf5;
        }
    }

    return grades;
}