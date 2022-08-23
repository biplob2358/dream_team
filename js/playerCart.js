const cartArray = [];

//onclick function
function selectBtn(element) {
  const palyerName = element.parentNode.parentNode.children[0].innerText;
  element.disabled = true;

  const playerObj = {
    palyerName: palyerName,
  };
  cartArray.push(playerObj);
  diplayPlayer(cartArray);
}

//display function
function diplayPlayer(cartPlayers) {
  if (cartPlayers.length > 5) {
    alert("No more selection left");
    return;
  }

  const tableBody = document.getElementById("cart-player");

  tableBody.innerHTML = "";

  for (let i = 0; i < cartPlayers.length; i++) {
    const name = cartArray[i].palyerName;
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th>${i + 1}</th>
        <th>${name}</th>
       `;
    tableBody.appendChild(tr);
  }
}
