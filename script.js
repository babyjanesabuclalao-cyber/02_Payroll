// Add input validation
function calculatePay() {
  const name = document.getElementById("employeeName").value.trim();
  const hoursInput = document.getElementById("hoursWorked").value.trim();
  const rateInput = document.getElementById("ratePerHour").value.trim();


  const regularHours = Math.min(hours, 40);
  const overtimeHours = Math.max(hours - 40, 0);

  const pay = (regularHours * rate) + (overtimeHours * rate * 1.5);

  const errorMessage = document.getElementById("errorMessage");
  const result = document.getElementById("result");

  // Clear previous messages
  errorMessage.innerText = "";
  errorMessage.style.display = "none";
  result.innerText = "";

  // Check for empty fields
  if (name === "" || hoursInput === "" || rateInput === "") {
    errorMessage.innerText = "Please fill in all fields.";
    errorMessage.style.display = "block";
    return;
  }

  const hours = parseFloat(hoursInput);
  const rate = parseFloat(rateInput);

  // Check for negative values
  if (hours < 0 || rate < 0) {
    errorMessage.innerText =
      "Hours worked and rate per hour cannot be negative.";
    errorMessage.style.display = "block";
    return;
  }

  // Existing calculation
  let pay = hours * rate;


  document.getElementById("result").innerText =
    name + "'s total pay is: $" + pay.toFixed(2);
}

document.getElementById("calculateBtn").onclick = calculatePay;
