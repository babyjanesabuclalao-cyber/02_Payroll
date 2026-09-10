// Bug: Calculation doesn’t handle overtime yet
function calculatePay() {
  const name = document.getElementById("employeeName").value;
  const hours = parseFloat(document.getElementById("hoursWorked").value);
  const rate = parseFloat(document.getElementById("ratePerHour").value);

  const regularHours = Math.min(hours, 40);
  const overtimeHours = Math.max(hours - 40, 0);

  const pay = (regularHours * rate) + (overtimeHours * rate * 1.5);

  document.getElementById("result").innerText =
    name + "'s total pay is: $" + pay.toFixed(2);
}

document.getElementById("calculateBtn").onclick = calculatePay;
