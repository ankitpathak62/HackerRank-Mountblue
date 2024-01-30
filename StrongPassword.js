function minimumNumber(n, password) {
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let missingCriteria = 0;
  if (!password.split("").some((char) => numbers.includes(char))) {
    missingCriteria++;
  }
  if (!password.split("").some((char) => lower_case.includes(char))) {
    missingCriteria++;
  }
  if (!password.split("").some((char) => upper_case.includes(char))) {
    missingCriteria++;
  }
  if (!password.split("").some((char) => special_characters.includes(char))) {
    missingCriteria++;
  }
  const remainingLength = Math.max(0, 6 - n);
  return Math.max(missingCriteria, remainingLength);
}
const n = 3;
const password = "Ab1";

console.log(minimumNumber(n, password)); // Output: 3
