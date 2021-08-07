var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

var s1= "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",s1);

randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

var s2= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",s2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent="Player 2 wins 🚩";
}
else{
    document.querySelector("h1").textContent="Draw";
}