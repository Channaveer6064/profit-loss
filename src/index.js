const initial = document.querySelector("#initP");
const n = document.querySelector("#Quant");
const CP = document.querySelector("#CP");
const btn = document.querySelector(".click");
const ans = document.querySelector(".ans");

function handler() {
  var price = parseInt(CP.value) - parseInt(initial.value);
  if (price === 0) {
    ans.innerText = "No Profit No Loss Wait For Magic!!!";
  } else if (price > 0) {
    ans.innerText =
      "Your Total Profit Is " +
      price * parseInt(n.value) +
      " and Total Profit Percentage Is " +
      price / parseInt(initial.value);
  } else {
    price = price * -1;
    ans.innerText =
      "Your Total Loss Is " +
      price * parseInt(n.value) +
      " and Total Loss Percentage Is " +
      price / parseInt(initial.value);
  }
}

btn.addEventListener("click", handler);
