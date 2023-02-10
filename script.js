function calcTip(bill) {
  const range = bill >= 50 && bill <= 300;
  return range ? bill * (20 / 100) : bill * (15 / 100);
}

const bills = [125, 555, 44];
const tips = bills.map((bill) => calcTip(bill));
const total = bills.map((bill) => bill + calcTip(bill));

console.log("------------------------");
console.log(bills, "bills");
console.log(tips, "tips");
console.log(total, "total");
console.log("------------------------");
