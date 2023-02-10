// Calculate average based on the incoming value.
const calcAverage = (value) => {
  const total = value.reduce((acc, currentValue) => acc + currentValue, 0);
  return total / value.length;
};

// Check which team wins.
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    console.log(
      `Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`
    );
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(
      `Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`
    );
  } else {
    console.log("Nobody won.");
  }
};

const dolphinsAverage = calcAverage([6, 12, 41]);
const koalasAverage = calcAverage([23, 34, 97]);

checkWinner(dolphinsAverage, koalasAverage);
