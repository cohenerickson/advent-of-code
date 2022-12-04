import fs from "node:fs";

const data = fs.readFileSync("./input.txt", {
  encoding: "utf-8"
});

const contents = data.split(/\n/g);

const output = [];

contents.forEach((line) => {
  const data = splitInput(line);
  output.push(data);
});

fs.writeFileSync("./input.js", `export default ${JSON.stringify(output, null, 2)};\n`, {
  encoding: "utf-8"
});

function splitInput (input) {
  const half = input.length / 2;
  return [input.slice(0, half), input.slice(half)];
}