let min = 1;
let max = 100;
let rand = Math.floor(Math.random()*(max-min+1))+min;
console.log(rand);
let attempts = 6;

document.addEventListener("DOMContentLoaded", function() {

document.getElementById("check").onclick = function(){
let user = parseInt(document.getElementById("numb").value);
console.log(attempts);


if(user > 100 || user < 0){ 
    document.getElementById("msg").textContent = "Oh No! Not in a range!";  
    return; 
}

if(isNaN(user)){
    document.getElementById("msg").textContent = "Oh No! Not a Number!"; 
    return;
}

if (user === rand){
    document.getElementById("sec").style.display = "none";
    document.getElementById("msg1").style.display = "flex";
    document.getElementById("msg1").textContent = "Restart to play again!";
    document.getElementById("but1").style.display= "none";
     document.getElementById("msg").style.display = "none";
     document.getElementById("actual").style.display = "none";
    document.getElementById("win1").style.display = "flex";
    document.getElementById("win").style.display = "none";
    return;
}
else if(user < rand){
    document.getElementById("msg").textContent = "Oops! Your guess is too Low!";
}
else if (user > rand){
    document.getElementById("msg").textContent = "Oops! Your guess is too High!";
}

attempts--;

document.getElementById("sp").innerHTML = attempts;
if(attempts === 0){
    document.getElementById("sec").style.display = "none";
    document.getElementById("sec1").style.display = "flex";
    document.getElementById("but1").style.display= "none";
    document.getElementById("actual").style.display = "flex";
    document.getElementById("act").textContent = rand;
    document.getElementById("win").style.display = "flex";
    document.getElementById("win").textContent = "Kindly restart the game. Better luck next time!";
    document.getElementById("msg").style.display = "none";
    document.getElementById("win1").style.display = "none";
    document.getElementById("msg1").style.display = "none";
}
}

document.getElementById("restart").onclick = function(){
    rand = Math.floor(Math.random()*(max-min+1))+min;
    console.log(rand);
    attempts = 6;
    document.getElementById("sec").style.display = "flex";
    document.getElementById("sec1").style.display = "none";
    document.getElementById("sp").textContent = attempts;
    document.getElementById("msg").textContent  ='';
    document.getElementById("numb").value = '';
    document.getElementById("but1").style.display = "flex";
    document.getElementById("numb").style.visibility = "visible";
    document.getElementById("check").style.visibility = "visible";
    document.getElementById("win").style.display = "none";
    document.getElementById("msg").style.display = "flex";
    document.getElementById("msg1").style.display = "none";
    document.getElementById("win1").style.display = "none";
    document.getElementById("actual").style.display = "none";

}
});
