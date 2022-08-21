//calculate button

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalPlayer = cartArray.length;
  const perPlayerCost = getInputById("per-palyer-field");
  //error handiling
  if (isNaN(perPlayerCost)) {
    alert("Enter Valid Amount");
    return;
  }
  //calculation
  const totalPlayerCost = totalPlayer * perPlayerCost;

  const playerExpenses = getTextElementById("player-expenses");
  playerExpenses.innerText = totalPlayerCost;
});

// total  calculation button
document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {
    const managerCost = getInputById("manager-cost");
    const coachCost = getInputById("coach-cost");

    //error handiling
    if (isNaN(managerCost)) {
      alert("Enter Valid manager cost");
      return;
    }
    if (isNaN(coachCost)) {
      alert("Enter Valid coach cost");
      return;
    }
    //calculation
    const totalStaffCost = managerCost + coachCost;
    const totalPlayerExpance = document.getElementById("player-expenses");
    const totalPlayerCostString = totalPlayerExpance.innerText;
    const totalPlayerCost = parseInt(totalPlayerCostString);

    const totalCost = totalPlayerCost + totalStaffCost;
    const saffExpenses = getTextElementById("total-cost");
    saffExpenses.innerText = totalCost;
  });
