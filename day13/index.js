import fs from "node:fs";


// parse data
const inputData = fs.readFileSync("./input.txt", "utf-8");

const packets = inputData.split(/\n/g);

packets.map(x => JSON.parse(x || "[]"));

const pairs = [[]];

packets.forEach((x) => {
  if (x.length) {
    pairs.at(-1).push(x);
  } else {
    pairs.push([]);
  }
});


// calculate values
let validPairs = 0;
pairs.forEach((pair) => {
  let packetStatus = checkPacketStatus(pair);
  console.log(packetStatus);
  if (packetStatus) validPairs++;
});


// implement logic
function checkPacketStatus (pair) {
  let isValid = true;
  for (let i = 0; i < pair[0].length; i++) {
    if (typeof pair[1][i] !== "undefined") {
      const streamIsValid = compareStream(pair[0], pair[1]);
      if (!streamIsValid) isValid = false;
    }
  }
  return isValid;
}

function compareStream (stream1, stream2) {
  const isNum1 = stream1 instanceof Number;
  const isNum2 = stream2 instanceof Number;
  if (isNum1 && isNum2) { // both are numbers
    return stream1 >= stream2;
  } else if (isNum1 && !isNum2) { // only #1 is number
    return checkPacketStatus([[stream1], stream2]);
  } else if (!isNum1 && isNum2) {// only #2 is a number
    return checkPacketStatus([stream1, [stream1]]);
  } else { // both are arrays
    return checkPacketStatus([stream1, stream2]);
  }
}
