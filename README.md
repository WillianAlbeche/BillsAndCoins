# BillsAndCoins

Bills and coins, is an application to calculate the change and inform the user the best way to make the payment of this change with the smallest number of bills and coins.

## Understanding the code

Below you will see the core function of the application 






```javaScript
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
```



## Video Demo -  Using the application 
To use the application is very simple, first in the field where it says "value of the product" you enter the price by which the product is being sold, after that, just below, you enter the amount you are paying for the product, may be a value higher or lower (subject to validation) than the price, with that, click calculate and see the notes needed to form the value of change that is written just below the table of notes and coins.

https://user-images.githubusercontent.com/26680389/209162038-d91a324b-2139-4fc8-85cb-a458981b3ab6.mov




## Videos Demo - How to run

To run this application, is very simple, to do this, just open the project folder, and click on the file index.html, that will redirect you to the application page 

https://user-images.githubusercontent.com/26680389/209163155-e3c055aa-2236-4552-b20c-e27953487ee8.mov



https://user-images.githubusercontent.com/26680389/209165061-c9f5e12a-3df4-4f0f-bb12-16e532acc9ca.mov



