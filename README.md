# BillsAndCoins

Bills and coins, is an application to calculate the change and inform the user the best way to make the payment of this change with the smallest number of bills and coins.

## Understanding the code
### Below you will see the functions of the application and their explanations:

<details><summary> Core Function </summary>
  
```javaScript
btnCalculate.addEventListener("click", (event) => {

// parses
  let valuePayedInput = parseFloat(valuePayed.value);
  let valueOfProductInput = parseFloat(valueOfProduct.value);
//some validations
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
```
 Basically, in this piece of code, we create an eventListener so that when the calculate button is clicked, we do what we put inside the closure, in this case, we parse the values of both the product and the input to float, making it easier to handle these values.<br>
  
 After that, we validate if the amount paid is less than the product's price or if the values are zero.<br>
 
 Finally, we perform the subtraction and go to the calculation area, where we perform the division of the values of the coins and cedulas.

</details>

<details><summary>Auxiliary Functions</summary>

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
The auxiliary joins, serve to insert the values into the HTML to be exported to the user, the "putBillInList" is an example of this, as its function is to update the bill table with the values corresponding to each number of bills used in the change.
  
 </details>
 



## Video Demo -  Using the application 
To use the application is very simple, first in the field where it says "value of the product" you enter the price by which the product is being sold, after that, just below, you enter the amount you are paying for the product, may be a value higher or lower (subject to validation) than the price, with that, click calculate and see the notes needed to form the value of change that is written just below the table of notes and coins.

https://user-images.githubusercontent.com/26680389/209162038-d91a324b-2139-4fc8-85cb-a458981b3ab6.mov




## Videos Demo - How to run

To run this application, is very simple, to do this, just open the project folder, and click on the file index.html, that will redirect you to the application page 

https://user-images.githubusercontent.com/26680389/209163155-e3c055aa-2236-4552-b20c-e27953487ee8.mov



https://user-images.githubusercontent.com/26680389/209165061-c9f5e12a-3df4-4f0f-bb12-16e532acc9ca.mov



