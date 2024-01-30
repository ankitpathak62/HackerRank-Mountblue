function acmTeam(topic) {
  const n = topic.length;
  const m = topic[0].length;
  let maxTopics = 0;
  let maxTeams = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let knownTopics = 0;
      for (let k = 0; k < m; k++) {
        if (topic[i][k] === "1" || topic[j][k] === "1") {
          knownTopics++;
        }
      }

      if (knownTopics > maxTopics) {
        maxTopics = knownTopics;
        maxTeams = 1;
      } else if (knownTopics === maxTopics) {
        maxTeams++;
      }
    }
  }

  return [maxTopics, maxTeams];
}

// Input
const n = 4;
const m = 5;
const topics = ["10101", "11100", "11010", "00101"];

// Output
const result = acmTeam(topics);
console.log(result[0]); // Output: 5
console.log(result[1]); // Output: 2
