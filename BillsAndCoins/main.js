const btnCalculate = document.querySelector("#calculateButton");
const valuePayed = document.querySelector("#valueField");
const listBill = document.querySelector("#billList");
const listCoin = document.querySelector("#coinList");
const changeValue = document.querySelector("#changeValue");
const valueOfProduct = document.querySelector("#valueOfProduct");

const bills = [200, 100, 50, 20, 10, 5, 2];
const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

function putBillInList(bill, qt_bill) {
  const liBill = document.createElement("li");
  liBill.innerText = `${qt_bill} nota(as) de R$  ${bill.toFixed(2)}`;
  liBill.classList.add("list-group-item");
  liBill.classList.add("text-center");
  listBill.appendChild(liBill);
}
function putInCoinList(coin, qt_coin) {
  const liCoin = document.createElement("li");
  liCoin.innerText = `${qt_coin} moeda(as) de R$  ${coin.toFixed(2)}`;
  liCoin.classList.add("list-group-item");
  liCoin.classList.add("text-center");
  listCoin.appendChild(liCoin);
}

function updateChangeValue(valuePayedInput, valueOfProductInput, result) {
  const changeValueResult = document.createElement("div");
  changeValueResult.innerText = `valor para o troco é de R$ ${result.toFixed(2)}`;
  changeValueResult.classList.add("text-center");
  changeValue.appendChild(changeValueResult);
}

btnCalculate.addEventListener("click", (event) => {

// parses
  let valuePayedInput = parseFloat(valuePayed.value);
  let valueOfProductInput = parseFloat(valueOfProduct.value);
  if (valueOfProductInput > valuePayedInput) {
    if(!alert('saldo insuficiente')){window.location.reload();}
  } else if(valueOfProductInput === 0 || valuePayedInput === 0){
    if(!alert('por favor, querido usuario, insira o preço do produto ou o valor que você pagou no produto ;)')){window.location.reload();}
  }

// Calculating the subtraction of the product price from the amount paid
  let result = valuePayedInput - valueOfProductInput;


changeValue.innerHTML = "";
updateChangeValue(valuePayedInput, valueOfProductInput, result);

  listBill.innerHTML = "";
  bills.forEach((bill) => {
    let qt_bill = parseInt(result / bill);
    result -= qt_bill * bill;
    console.log(qt_bill);

    putBillInList(bill, qt_bill);
  });

  listCoin.innerHTML = "";
  coins.forEach((coin) => {
    let qt_coin = parseInt(result / coin);
    result -= qt_coin * coin;
    console.log(qt_coin);

    putInCoinList(coin, qt_coin);
  });
});
