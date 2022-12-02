import input from "./input.js";

let score = 0;

input.forEach((turn) => {
  const scoreForTurn = calculateScore(turn);
  console.log(scoreForTurn);
  score += scoreForTurn;
});

console.log(score);



// A || X: Rock
// B || Y: Paper
// C || Z: Scisors
function calculateScore (input) {
  let scoreForTurn = 0;
  // 0 points for loss
  // 3 poitns for tie
  // 6 points for win
  // Rock: 1 point
  // Paper: 2 points
  // Scisors: 3 points

  input = normalizeInput(input);

  if (input[0] === input[1]) {
    scoreForTurn += 3;
  } else if ((input[0] === "A" && input[1] === "B") || (input[0] === "B" && input[1] === "C") || (input[0] === "C" && input[1] === "A")) {
    scoreForTurn += 6;
  }
  scoreForTurn += input[1] === "A" ? 1 : input[1] === "B" ? 2 : 3;

  return scoreForTurn;
}

function normalizeInput (input) {
  input[0] = input[0].toUpperCase();
  input[1] = input[1].toUpperCase();
  // input[1] = input[1] === "X" ? "A" : input[1] === "Y" ? "B" : "C";

  if (input[1] === "X") {
    // loose
    console.log("loose");
    input[1] = input[0] === "A" ? "C" : input[0] === "B" ? "A" : "B";
  } else if (input[1] === "Y") {
    input[1] = input[0];
  } else {
    // win
    console.log("win");
    input[1] = input[0] === "A" ? "B" : input[0] === "B" ? "C" : "A";
  }

  console.log(input);
  return input;
}