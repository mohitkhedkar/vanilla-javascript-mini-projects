const btn = document.getElementById("btn");
const displayBmi = document.getElementById("span");

btn.addEventListener("click", calculateBMI);

function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  const bmi = weight / (height / 100) ** 2;
  console.log(bmi);

  if (bmi <= 18.5) {
    displayBmi.style.color = "red";
    displayBmi.innerHTML = `your BMI is ${bmi.toFixed(1)} (Underweight)`;
  } else if (bmi > 18.5 && bmi <= 24.9) {
    displayBmi.style.color = "green";
    displayBmi.innerHTML = `your BMI is ${bmi.toFixed(1)} (Normal)`;
  } else if (bmi > 25 && bmi <= 29.9) {
    displayBmi.style.color = "red";
    displayBmi.innerHTML = `your BMI is ${bmi.toFixed(1)} (Overweight)`;
  } else {
    displayBmi.style.color = "red";
    displayBmi.innerHTML = `your BMI is ${bmi.toFixed(1)} (obesity)`;
  }
}
