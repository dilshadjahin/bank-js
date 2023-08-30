/*
1. add event listener to deposite button
2. get deposite ammount from the input deposit feild
2.1 convert string deposite ammount to number types
3.  clear the deposit input feild after getting the value
4. get the previous deposte total
5. calculate new deposit total and set the value to the deposit total
6. get current balance 
7. calculate the new balance & set to the balance total element 
*/


    //step-01

document.getElementById('btn-deposite').addEventListener('click', function(){

    // step-02

    const depositeField = document.getElementById('deposit-feild');
    const newDepositAmountString = depositeField.value ;
    const newDepositAmmount = parseFloat(newDepositAmountString);
    console.log(newDepositAmmount);

    // step-03
    depositeField.value = '';

    // step-04 

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalElementString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalElementString);

    // step- 05

    const newDepositTotal = previousDepositTotal + newDepositAmmount;
    depositTotalElement.innerText = newDepositTotal;

    // step- 06

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-07

    const newBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotalElement.innerText = newBalanceTotal;




})