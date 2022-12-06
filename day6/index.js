import fs from "node:fs";

const dataStream = fs.readFileSync("input.txt", "utf-8");

const input = dataStream.split("");

const stack = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let solved = 0;

console.log(dataStream.indexOf("gbpl")+4);
console.log(dataStream.indexOf([
  'g', 'b', 'p', 'l',
  'm', 'z', 'w', 'm',
  'd', 't', 'n', 'p',
  'q', 'w'
].join(""))+14);
console.log("mjqjpqmgbljsphdztnvjfqwrcgsmlb".indexOf("jpqm"));
console.log("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw".indexOf("jwzlrfnpqdbhtm")+14);


for (let i = 0; i < input.length; i++) {
  let char = input[i];

  stack.push(char);
  stack.shift();

  if (!hasDuplicates(stack)) {
    if (solved < 15) console.log(i, stack);
    solved++;
  }
}

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}