import input from "./input.js";

const elves = [];

let stack = [];

const totals = [];

input.forEach((amount) => {
  if (amount) {
    stack.push(amount);
  } else {
    elves.push(stack);
    stack = [];
  }
});

elves.forEach((elf) => {
  let total = 0;
  elf.forEach((amount) => {
    amount = parseInt(amount);
    total += amount;
  });
  totals.push(total);
});

totals.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);

console.log("Part 1:", totals[0]);

console.log("Part 2:", totals.slice(0, 3).reduce((a, b) => a + b));
