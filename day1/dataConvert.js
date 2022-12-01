// this file takes the input from input.txt and converts it to
// a JSON array outputted to input.js as a value to be imported

import fs from "node:fs";

const content = fs.readFileSync("./input.txt", {
  encoding: "utf-8"
});

const array = content.split(/\n/g);

fs.writeFileSync("./input.js", "export default " + JSON.stringify(array, null, 2) + ";\n", {
  encoding: "utf-8"
});
