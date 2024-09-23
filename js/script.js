
function mainBalance (){
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceAmount = parseFloat(mainBalance);
    return mainBalanceAmount;
}
function donatedAmount (donatedBalanceID){
    const donatedAmount = document.getElementById(donatedBalanceID).value;
    const amount = parseFloat(donatedAmount);
    return amount;
}

function showSectionByID(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
function showActiveBtn(id1, id2){
    document.getElementById(id1).classList.remove('border', 'border-gray-400');
    document.getElementById(id1).classList.add('bg-btn');
    document.getElementById(id2).classList.remove('bg-btn');
    document.getElementById(id2).classList.add('border', 'border-gray-400');
}

document.getElementById('donated-btn-1').addEventListener('click', function(even){
    even.preventDefault();
    const amount = donatedAmount ('donated-balance-1');
    if(  typeof amount === "number" && !isNaN(amount) && amount>0 ){
        const mainBalanceAmount = mainBalance();
        if(mainBalanceAmount > 0 && mainBalanceAmount >= amount){
            const totalMainBalance = mainBalanceAmount - amount;
            document.getElementById('main-balance').innerText = totalMainBalance;
            const donatedTotalBalance = document.getElementById('donated-total-balance-1').innerText;
            const donatedTotalBalanceAmount = parseFloat(donatedTotalBalance); 
            const newDonatedBalance =  donatedTotalBalanceAmount + amount;
            document.getElementById('donated-total-balance-1').innerText = newDonatedBalance;
        }
    }else{
        alert('this is another data type: ', amount)
    }
})
document.getElementById('donated-btn-2').addEventListener('click', function(even){
    even.preventDefault();
    const amount = donatedAmount ('donated-balance-2');
    if(  typeof amount === "number" && !isNaN(amount) && amount>0   ){
        const mainBalanceAmount = mainBalance();
        if(mainBalanceAmount > 0 && mainBalanceAmount >= amount){
            const totalMainBalance = mainBalanceAmount - amount;
            document.getElementById('main-balance').innerText = totalMainBalance;
            const donatedTotalBalance = document.getElementById('donated-total-balance-2').innerText;
            const donatedTotalBalanceAmount = parseFloat(donatedTotalBalance); 
            const newDonatedBalance =  donatedTotalBalanceAmount + amount;
            document.getElementById('donated-total-balance-2').innerText = newDonatedBalance;
        }
    }else{
        alert('this is another data type: ', amount)
    }
})
document.getElementById('donated-btn-3').addEventListener('click', function(even){
    even.preventDefault();
    const amount = donatedAmount ('donated-balance-3');
    if(  typeof amount === "number" && !isNaN(amount) && amount>0   ){
        const mainBalanceAmount = mainBalance();
        if(mainBalanceAmount > 0 && mainBalanceAmount >= amount){
            const totalMainBalance = mainBalanceAmount - amount;
            document.getElementById('main-balance').innerText = totalMainBalance;
            const donatedTotalBalance = document.getElementById('donated-total-balance-3').innerText;
            const donatedTotalBalanceAmount = parseFloat(donatedTotalBalance); 
            const newDonatedBalance =  donatedTotalBalanceAmount + amount;
            document.getElementById('donated-total-balance-3').innerText = newDonatedBalance;
        }
    }else{
        alert('this is another data type: ', amount)
    }
})

document.getElementById('donation').addEventListener('click', function(){
    showSectionByID('donation-section');
    showActiveBtn('donation', 'history');

})
document.getElementById('history').addEventListener('click', function(){
    showSectionByID('history-section');
    showActiveBtn('history','donation');
})
