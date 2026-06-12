// IF STATEMENTS = if a condition is true, executr some code
//                 if not, do something else

/*
let age = 25;

if(age >= 18){
    console.log("You are old enought to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");

}
*/

/*
let isStudent = false;

if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are NOT a student!");
}
*/


/*
let age = 25;
let hasLicense = false;

if(age >= 18){
    console.log("Your are old enough to drive");

    if(hasLicense){
        console.log("you have you license");
    }
    else{
        console.log("you dont have your license yet!");
    }
}
else{
    console.log("You must be 18+ to have a license");
}
*/
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 101;

mySubmit.onclick = function(){
    
    age = myText.value;
    age = Number(age);

if(age >=100){
    resultElement.textContent = `You Should rest`;
}
else if(age == 0){
    resultElement.textContent = `You are just born go and be a DOC/ENG`;
}
else if(age >= 18){
    resultElement.textContent = `you are old enough to enter this site`;
}
else if(age < 0){
    resultElement.textContent = `Your age can't be less than zero`;
}

else{
    resultElement.textContent = `you must be 18+ to enter this site`;
}
}


