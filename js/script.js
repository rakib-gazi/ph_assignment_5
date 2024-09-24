
//main balance function
function mainBalance (){
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceAmount = parseFloat(mainBalance);
    return mainBalanceAmount;
}
//value of donation input amount function
function donatedAmount (donatedBalanceID){
    const donatedAmount = document.getElementById(donatedBalanceID).value;
    const amount = Number(donatedAmount);
    return amount;
}
//donation & history section show hide function
function showSectionByID(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
//donation & history active button function
function showActiveBtn(id1, id2){
    document.getElementById(id1).classList.remove('border', 'border-gray-400');
    document.getElementById(id1).classList.add('bg-btn');
    document.getElementById(id2).classList.remove('bg-btn');
    document.getElementById(id2).classList.add('border', 'border-gray-400');
}
//donation success message modal function
function donationModal(cardHeadline, amount){
    document.getElementById('donation-modal').showModal();
    const cardNewHeadline = document.getElementById(cardHeadline).innerText;
    document.getElementById('donation_headline').innerText = 'You have donated for '+ cardNewHeadline;
    document.getElementById('modal-amount').innerText = `${amount} Taka Donated`;
}
//donation history function
function donationHistory(amount, headline){
    //hide empty message
    const emptyMsg = document.getElementById('empty-message');
    if(emptyMsg){
        emptyMsg.remove();
    }
    //get history section
    const historySection = document.getElementById('history-section');
    const cardHeadline = document.getElementById(headline).innerText;
    const donateTime = new Date();
    //created a div inside history section with class added
    const cardDiv = document.createElement("div");
    cardDiv.classList.add('p-8', 'border','border-gray-400', 'rounded-xl','shadow-md', 'my-6');
    //created a h1 heading inside the div & added inner text then appened to div
    const cardH1 = document.createElement("h1");
    cardH1.classList.add('font-bold', 'text-black','text-xl');
    cardH1.innerText= `${amount} Taka is ${cardHeadline}`;
    cardDiv.appendChild(cardH1);
    //created a p tag inside the div & added inner text current transction time then appened to div
    const cardP = document.createElement("p");
    cardP.classList.add('text-gray-700','pt-4');
    cardP.innerText= `Date: ${donateTime}`;
    cardDiv.appendChild(cardP);
    //finally preprend this div inside history section 
    historySection.prepend(cardDiv);
}
//dynamic decision making for donated amount for crisis support Bangladesh
for (let i = 1; i <= 3; i++) {
    document.getElementById(`donated-btn-${i}`).addEventListener('click', function(event){
        event.preventDefault();
        const amount = donatedAmount (`donated-balance-${i}`);
        const mainBalanceAmount = mainBalance();
        if(  typeof amount === "number" && !isNaN(amount) && amount>0 ){
            if(mainBalanceAmount > 0 && mainBalanceAmount >= amount){
                const totalMainBalance = mainBalanceAmount - amount;
                document.getElementById('main-balance').innerText = totalMainBalance;
                const donatedTotalBalance = document.getElementById(`donated-total-balance-${i}`).innerText;
                const donatedTotalBalanceAmount = parseFloat(donatedTotalBalance); 
                const newDonatedBalance =  donatedTotalBalanceAmount + amount;
                document.getElementById(`donated-total-balance-${i}`).innerText = newDonatedBalance;
                donationModal(`card-headline-${i}`, amount);
                donationHistory(amount, `card-headline-${i}`);
                document.getElementById(`donated-balance-${i}`).value = '';
            }
        }else{
            alert('Invalid data .Please enter valid data.')
        }
    }) 
}
//decision making for show & hide the section of donation & transction
document.getElementById('donation').addEventListener('click', function(){
    showSectionByID('donation-section');
    showActiveBtn('donation', 'history');

})
//decision making for action button status of the section of donation & transction
document.getElementById('history').addEventListener('click', function(){
    showSectionByID('history-section');
    showActiveBtn('history','donation');
})
//sticky navbar with blur background on window on scroll y axis
const navbar = document.getElementById('header');
window.addEventListener('scroll', function() {
    if (window.scrollY >= 50) {
        navbar.classList.add('backdrop-blur-3xl', 'sticky', 'top-0', 'z-50','bg-opacity-60');
    } else {
        navbar.classList.remove('backdrop-blur-3xl', 'sticky', 'top-0', 'z-50', 'bg-opacity-60');
        navbar.classList.add('bg-nav');
    }
});



