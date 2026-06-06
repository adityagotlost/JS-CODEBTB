//accept user input

// 1. Easy way = window prompt
// 2. Professional Way = HTML textbox

/* easy way
let username;
username = window.prompt("what's your username?");

console.log(username);
*/


let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `hello ${username}`;
}