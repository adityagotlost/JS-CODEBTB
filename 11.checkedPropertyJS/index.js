// .checked = property that determines the chekced state of an 
//            HTML checkbox or radio buttom element

const myCheckBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCard");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `you are subscribed!`;
    }
    else{
        subResult.textContent = `you are not subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent =`You are paying with visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent =`you are paying with mastercard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent =`you are playing with paypal`;
    }
    else{
        paymentResult.textContent =`you must select a payment type`;
    }
}