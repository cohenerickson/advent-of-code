import input from "./input.js";

const elves = [];

let stack = [];

let most = 0;

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
  if (total > most) {
    most = total;
    console.log(elf);
  }
});

console.log(most);
