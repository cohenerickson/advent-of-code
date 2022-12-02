import fs from "node:fs";

const rawData = fs.readFileSync("./input.txt", {
  encoding: "utf-8"
});

const rawTurns = rawData.split(/\n/g);

const turns = [];

rawTurns.forEach((turn) => {
  turns.push(turn.split(" "));
});

fs.writeFileSync("./input.js", `export default ${JSON.stringify(turns, null, 2)};\n`, {
  encoding: "utf-8"
});
