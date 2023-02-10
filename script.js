const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  const range = bill >= 50 && bill <= 300;
  return range ? bill * (20 / 100) : bill * (15 / 100);
}

function calcAverage(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0) / arr.length;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

// calcAverage(totals);
console.log("Average of totals: ", calcAverage(totals));
