import input from "./input.js";

let containing = 0;
let overlapping = 0;


input.forEach((pair) => {
  const pair1 = parseValues(pair[0]);
  const pair2 = parseValues(pair[1]);

  console.log(pair1, pair2);

  if (pair1[0] <= pair2[0] && pair1[1] >= pair2[1]) {
    containing++;
  } else if (pair2[0] <= pair1[0] && pair2[1] >= pair1[1]) {
    containing++;
  }

  if (pair2[0] >= pair1[0] && pair2[0] <= pair1[1]) {
    overlapping++;
  } else if (pair2[1] >= pair1[0] && pair2[1] <= pair1[1]) {
    overlapping++;
  } else if (pair1[0] >= pair2[0] && pair1[0] <= pair2[1]) {
    overlapping++;
  } else if (pair1[1] >= pair2[0] && pair1[1] <= pair2[1]) {
    overlapping++;
  }
});

console.log(containing, overlapping);

function parseValues (range) {
  const [min, max] = range.split("-").map(Number);
  return [min, max];
}
