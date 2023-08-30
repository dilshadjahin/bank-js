/*
1. add event listener to withdraw button
2. get the withdraw ammount 
3. clear the withdraw input feild
4. get previous withdraw total
5. calculate total withdraw amount and set it to the withdraw total element 
6. get previous balance
7. calculate new balance and set it to the balance





*/

// step-01

document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step - 02

    const withdrawField =  document.getElementById('withdraw-feild');
    const newWithdrawAmountString = withdrawField.value ;
    const newWithDrawAmmount = parseFloat(newWithdrawAmountString);

    // step- 03

    withdrawField.value= '';

    // step- 04

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step- 05

    const newWithdrawTotal = previousWithdrawTotal +  newWithDrawAmmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step- 06
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step- 07

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmmount;
    balanceElement.innerText = newBalanceTotal;

})