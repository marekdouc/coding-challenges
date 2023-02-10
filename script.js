// Calculate tip based on the bill.
function calculateTip(bill) {
  const range = bill >= 50 && bill <= 300;
  return range ? bill * (20 / 100) : bill * (15 / 100);
}

const bill = 40;
const tip = calculateTip(bill);
const totalValue = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}.`
);
