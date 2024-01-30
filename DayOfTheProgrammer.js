function isLeapJulian(year) {
    return year % 4 === 0;
}

function isLeapGregorian(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function dayOfProgrammer(year) {
    let day = 256;

    if (year === 1918) {
        day += 13; // January 31 + 13 days
    } else if ((year < 1918 && isLeapJulian(year)) || (year > 1918 && isLeapGregorian(year))) {
        day--;
    }

    let month = 1;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    while (day > daysInMonth[month - 1]) {
        day -= daysInMonth[month - 1];
        month++;
    }

    const dayStr = day < 10 ? '0' + day : day;
    const monthStr = month < 10 ? '0' + month : month;

    return dayStr + '.' + monthStr + '.' + year;
}

console.log(dayOfProgrammer(2017)); // Output: 13.09.2017
console.log(dayOfProgrammer(2016)); // Output: 12.09.2016
