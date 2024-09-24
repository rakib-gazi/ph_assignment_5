
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
function donationModal(cardHeadline){
    document.getElementById('donation-modal').showModal();
    const cardNewHeadline = document.getElementById(cardHeadline).innerText;
    document.getElementById('donation_headline').innerText = 'You have donated for '+ cardNewHeadline;
}

function donationHistory(amount, headline){
    const historySection = document.getElementById('history-section')
    const cardHeadline = document.getElementById(headline).innerText;
    const donateTime = new Date();
    historySection.innerHTML=`
    <div class="p-8 border border-gray-400 rounded-xl shadow-md my-6">
        <h1 class="font-bold text-black text-xl">${amount} Taka is ${cardHeadline}</h1>
        <p class="text-gray-500"> Date : ${donateTime}</p>
    </div>`;
}

document.getElementById('donated-btn-1').addEventListener('click', function(event){
    event.preventDefault();
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
            donationModal('card-headline-1');
            donationHistory(amount, 'card-headline-1');
        }
    }else{
        alert('Invalid data .Please enter valid data.')
    }
})
document.getElementById('donated-btn-2').addEventListener('click', function(event){
    event.preventDefault();
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
            donationModal('card-headline-2');
            donationHistory(amount, 'card-headline-2');
        }
    }else{
        alert('Invalid data .Please enter valid data.')
    }
})
document.getElementById('donated-btn-3').addEventListener('click', function(event){
    event.preventDefault();
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
            donationModal('card-headline-3');
            donationHistory(amount, 'card-headline-3');
        }
    }else{
        alert('Invalid data .Please enter valid data.')
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

const navbar = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY >= 50) {
        navbar.classList.add('backdrop-blur-3xl', 'sticky', 'top-0', 'z-50','bg-opacity-60');
    } else {
        navbar.classList.remove('backdrop-blur', 'sticky', 'top-0', 'z-50','bg-opacity-60');
        navbar.classList.add('bg-nav');
    }
});


