import input from "./input.js";

// [D]                     [N] [F]    
// [H] [F]             [L] [J] [H]    
// [R] [H]             [F] [V] [G] [H]
// [Z] [Q]         [Z] [W] [L] [J] [B]
// [S] [W] [H]     [B] [H] [D] [C] [M]
// [P] [R] [S] [G] [J] [J] [W] [Z] [V]
// [W] [B] [V] [F] [G] [T] [T] [T] [P]
// [Q] [V] [C] [H] [P] [Q] [Z] [D] [W]
//  1   2   3   4   5   6   7   8   9 

const stacks = [
  ["Q", "W", "P", "S", "Z", "R", "H", "D"],
  ["V", "B", "R", "W", "Q", "H", "F"],
  ["C", "V", "S", "H"],
  ["H", "F", "G"],
  ["P", "G", "J", "B", "Z"],
  ["Q", "T", "J", "H", "W", "F", "L"],
  ["Z", "T", "W", "D", "L", "V", "J", "N"],
  ["F", "H", "G", "J", "C", "Z", "T", "D"].reverse(),
  ["H", "B", "M", "V", "P", "W"].reverse()
];

// const stacks = [
//   ["Z", "N"],
//   ["M", "C", "D"],
//   ["P"]
// ];

input.forEach((set) => {
  const amount = set[0];
  const start = set[1] - 1;
  const end = set[2] - 1;

  const crates = stacks[start].splice(-amount);
  stacks[end].push(...crates);

  // for (let i = 0; i < amount; i++) {
  //   const crate = stacks[start].pop();
  //   stacks[end].push(crate);
  // }
});

console.log(stacks.map((x) => x.at(-1)).join(""));
