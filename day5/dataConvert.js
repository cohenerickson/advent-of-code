import fs from "node:fs";

const data = fs.readFileSync("./input.txt", {
  encoding: "utf-8"
});

const rows = data.split(/\n/g);

const movements = rows.map((row) => {
  const parts = row.split(" ");
  return [Number(parts[1]), Number(parts[3]), Number(parts[5])];
});

fs.writeFileSync("./input.js", `export default ${JSON.stringify(movements, null, 2)};\n`, {
  encoding: "utf-8"
});
