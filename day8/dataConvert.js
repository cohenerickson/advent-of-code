import fs from "node:fs";

const inputData = fs.readFileSync("./input.txt", "utf-8");

const data = [];

const lines = inputData.split(/\n/g);

for (let i = 0; i < lines.length; i++) {
  data.push(lines[i].split("").map(Number));
}

fs.writeFileSync("./input.js", `export default ${JSON.stringify(data, null, 2)};\n`, "utf-8");