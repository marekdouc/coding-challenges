const minimumScore = 100;

// Calculate average score.
function calculateAverageScore(scores) {
  const total = scores.reduce((acc, currentValue) => acc + currentValue, 0);
  return total / scores.length;
}

// Average scores.
const dolphinsAverageScore = calculateAverageScore([96, 108, 89]);
const koalasAverageScore = calculateAverageScore([88, 91, 110]);

// Compare scores.
const isDraw = dolphinsAverageScore === koalasAverageScore;
const hasReachedMinimum =
  dolphinsAverageScore >= minimumScore && koalasAverageScore >= minimumScore;
const areDolphinsWinners = dolphinsAverageScore > koalasAverageScore;
const areKoalasWinners = dolphinsAverageScore < koalasAverageScore;

if (!hasReachedMinimum) {
  console.log(`No one has reached the required minimum score ${minimumScore}.`);
  console.log(
    `Dolphins reached average score of ${dolphinsAverageScore.toFixed(
      2
    )} and Koalas ${koalasAverageScore.toFixed(2)}`
  );
} else {
  // Check if dolphins are winners.
  if (areDolphinsWinners) {
    console.log("Dolphins wins a trophy!");
  } else if (areKoalasWinners) {
    console.log("Koalas wins a trophy!");
  } else {
    console.log("Ooops.. there is a draw!");
  }
}
