const mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
  },
};

const john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `Mark's BMI (${mark.bmi.toFixed(
      2
    )}) is higher than John's (${john.bmi.toFixed(2)})!"`
  );
} else {
  console.log(
    `John's BMI (${john.bmi.toFixed(
      2
    )}) is higher than Mark's (${mark.bmi.toFixed(2)})!"`
  );
}
