import input from "./input.js";

let cols = [];
let total = 0;

for (let i = 0; i < input.length; i++) {
  let line = input[i];
  total += calculateVisibleTrees(line);

  for (let j = 0; j < line.length; j++) {
    if (!cols[j]) {
      cols[j] = [];
    }
    cols[j].push(line[j]);
  }
}

for (let i = 0; i < cols.length; i++) {
  total += calculateVisibleTrees(cols[i]);
}

console.log(total);

function calculateVisibleTrees (line) {
  let visibleTrees = 0;

  let lastTree = -1;

  for (let i = 0; i < line.length; i++) {
    if (line[i] > lastTree) {
      visibleTrees++;
      lastTree = line[i];
    }
  }

  lastTree = -1;

  for (let i = line.length; i > 0; i--) {
    if (line[i] > lastTree) {
      visibleTrees++;
      lastTree = line[i];
    }
  }

  return visibleTrees;
}
