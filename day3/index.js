import input from "./input.js";

const priorities = [];
const badgePriorities = [];

input.forEach((line) => {
  const matchingChar = line[0].split("").find((char) => line[1].indexOf(char) >= 0);
  const priority = calculatePriority(matchingChar);
  priorities.push(priority);
});

console.log(priorities.reduce((a, b) => a + b, 0));

for (let i = 0; i < input.length; i+=3) {
  const items = input.slice(i, i + 3).map(x => x.join(""));
  const matchingChars = items[0].split("").find((char) => {
    return items[1].indexOf(char) >= 0 && items[2].indexOf(char) >= 0;
  });
  badgePriorities.push(calculatePriority(matchingChars));
}

console.log(badgePriorities.reduce((a, b) => a + b, 0));

function calculatePriority (char) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const priority = alphabet.indexOf(char) + 1 || alphabet.toUpperCase().indexOf(char) + 27;
  return priority;
}
