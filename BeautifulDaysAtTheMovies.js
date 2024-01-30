function beautifulDays(i, j, k) {
  let beautifulDayCount = 0;

  for (let day = i; day <= j; day++) {
    const reversedDay = parseInt(day.toString().split("").reverse().join(""));

    const difference = Math.abs(day - reversedDay);

    if (difference % k === 0) {
      beautifulDayCount++;
    }
  }

  return beautifulDayCount;
}

console.log(beautifulDays(20, 23, 6)); // Output: 2
