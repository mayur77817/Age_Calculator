const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth(); //getMonth() returns the month from 0 to 11. 1 is added   
                                 //to the month before padding to keep it 1 to 12
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } else if (inputMonth.value > 12) {
        inputMonth.style.borderColor = "red";
        inputMonth.parentElement.querySelector("small").innerText = "must be valid month.";
        validator = false;
    } else if (inputDay.value > 31) {
        inputDay.style.borderColor = "red";
        inputDay.parentElement.querySelector("small").innerText =
          "must be valid day.";
        validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}
function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (inputDay.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (inputMonth.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - inputDay.value;
    const m = month - inputMonth.value;
    const y = year - inputYear.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}

form.addEventListener("submit", handleSubmit);