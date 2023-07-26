let name = prompt("Muhammad");
let address = prompt("Grozny");
let phone = prompt("89326826923");
let date = new Date("1999.02.28");
const COLOR_GREEN = "00ff00";
const BLOCK_SIZE = 35;
const box = {
  product: "товары",
  prices: "цены",
};
box.prices = 137;
Math.PI;

console.log(name + "Muhammad" + address + "Grozny" + phone + "89326826923");
const valueInputNode = document.querySelector(".js-value-input");
const currencySelectorNode = document.querySelector(".js-currency-selector");
const outputNode = document.querySelector(".js-output");
valueInputNode.addEventListener("input", function () {
  const rub = Number(valueInputNode.value);
  const currency = currencySelectorNode.value;
  const result = convert(rub, currency);
  console.log(result);
  outputNode.innerText = result;
});
currencySelectorNode.addEventListener("change", function () {
  const rub = Number(valueInputNode.value);
  const currency = currencySelectorNode.value;
  const result = convert(rub, currency);
  console.log(result);
  outputNode.innerText = result;
});
console.log(Math.PI);
console.log(date);
console.log(box);
console.log(COLOR_GREEN);
console.log(BLOCK_SIZE);
