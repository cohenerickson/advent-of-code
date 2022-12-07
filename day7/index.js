import input from "./input.js";

const dirs = [];

const usedSpace = calculateDirectorySize(input);

console.log(dirs.filter(x => x <= 100000).reduce((a, b) => a + b, 0));

const availableSpace = 70000000 - usedSpace;
console.log(availableSpace);
const spaceNeeded = 30000000 - availableSpace;

console.log(spaceNeeded);
console.log(JSON.stringify(dirs.sort((a, b) => a - b), null, 2));

function calculateDirectorySize (dir) {
  let size = 0;
  for (let file of Object.keys(dir.files)) {
    size += Number(dir.files[file]);
  }
  for (let subDir of Object.keys(dir.dirs)) {
    size += calculateDirectorySize(dir.dirs[subDir]);
  }
  dirs.push(size);
  return size;
}
