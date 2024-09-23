
document.getElementById('donated-btn-1').addEventListener('click', function(even){
    even.preventDefault();
    const donatedAmount = document.getElementById('donated-balance-1').value;
    const amount = parseFloat(donatedAmount);
    if(  typeof amount === "number" && !isNaN(amount)){
        const mainBalance = document.getElementById('main-balance').innerText;
        const mainBalanceAmount = parseFloat(mainBalance);
        const totalMainBalance = mainBalanceAmount - amount;
        document.getElementById('main-balance').innerText = totalMainBalance;
        const donatedTotalBalance = document.getElementById('donated-total-balance-1').innerText;
        const donatedTotalBalanceAmount = parseFloat(donatedTotalBalance); 
        const newDonatedBalance =  donatedTotalBalanceAmount + amount;
        document.getElementById('donated-total-balance-1').innerText = newDonatedBalance;
    }else{
        alert('this is another data type: ', amount)
    }
})
document.getElementById('donated-btn-2').addEventListener('click', function(even){
    even.preventDefault();
    const donatedAmount = document.getElementById('donated-balance-2').value;
    const amount = parseFloat(donatedAmount);
    if(  typeof amount === "number" && !isNaN(amount)){
        const mainBalance = document.getElementById('main-balance').innerText;
        const mainBalanceAmount = parseFloat(mainBalance);
        const totalMainBalance = mainBalanceAmount - amount;
        document.getElementById('main-balance').innerText = totalMainBalance;
        const donatedTotalBalance = document.getElementById('donated-total-balance-2').innerText;
        const donatedTotalBalanceAmount = parseFloat(donatedTotalBalance); 
        const newDonatedBalance =  donatedTotalBalanceAmount + amount;
        document.getElementById('donated-total-balance-2').innerText = newDonatedBalance;
    }else{
        alert('this is another data type: ', amount)
    }
})
