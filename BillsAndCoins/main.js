const btnCalculate = document.querySelector("#calculateButton");
const inputValue = document.querySelector("#valueField");
const listBill = document.querySelector("#billList");
const listCoin = document.querySelector("#coinList");
const changeValue = document.querySelector("#changeValue")

const bills = [200, 100, 50, 20, 10, 5, 2];
const coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

function putBillInList(bill, qt_bill) {
  const liBill = document.createElement("li");
  liBill.innerText = `${qt_bill} nota(s) de R$  ${bill.toFixed(2)}`;
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

btnCalculate.addEventListener("click", (event) => {
  let value = parseFloat(inputValue.value);
  listBill.innerHTML = "";
  bills.forEach((bill) => {
    let qt_bill = parseInt(value / bill);
    value -= qt_bill * bill;
    console.log(qt_bill);

    putBillInList(bill, qt_bill);
  });

  listCoin.innerHTML = "";
  coins.forEach((coin) => {
    let qt_coin = parseInt(value / coin);
    value -= qt_coin * coin;
    console.log(qt_coin);

    putInCoinList(coin, qt_coin);
  });

  const changeValueResult = document.createElement("div")
  changeValueResult.innerHTML = `valor para o troco é de R$ ${changeValue}` 
  changeValueResult.classList.add("text-center")
});
