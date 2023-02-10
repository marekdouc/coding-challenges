// ??? BMI = mass / height ** 2 = mass / (height * height)
// https://www.czc.cz/geek/vypocet-bmi-co-je-to-body-mass-index-a-jak-jej-spocitat/clanek
// BMI = mass / height ** 2;

// TODO: Zeptat se na vzorec, neni jasny to = mass /.....

// Calculated BMI based on the mass and height of the person.
function calculateBMI(mass, height) {
  return mass / Math.pow(height, 2);
}

const mark = {
  mass: 78,
  height: 1.69,
};

const john = {
  mass: 92,
  height: 1.95,
};

// Calculate BMI.
const markBMI = calculateBMI(mark.mass, mark.height);
const johnBMI = calculateBMI(john.mass, john.height);

// Compare BMI.
const markHigherBMI = markBMI > johnBMI;

// Check who has higher BMI.
if (markHigherBMI) {
  console.log(
    `Mark's (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(
      2
    )})!`
  );
} else {
  console.log(
    `John's (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(
      2
    )})!`
  );
}
