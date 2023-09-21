let h3 = document.querySelector("h3");
let highscore = 0;
let body = document.querySelector("body");
let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","green","blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {

    if(started == false)
    {
        console.log("Game is started")
        started = true;
        levelup();
    }

});

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let rand = Math.floor(Math.random()*3);
    let randc = btns[rand];
    let randbtn = document.querySelector(`.${randc}`)
    gameSeq.push(randc);
    console.log(gameSeq);
    btnflash(randbtn);

}
function overflash (btn) {
    body.classList.add("overflash");
    setTimeout(function() 
    {
        body.classList.remove("overflash");
    },250);

}
function btnflash (btn) {
    btn.classList.add("flash");
    setTimeout(function() 
    {
        btn.classList.remove("flash");
    },250);

}
function userflash (btn) {
    btn.classList.add("userflash");
    setTimeout(function() 
    {
        btn.classList.remove("userflash");
    },250);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

function btnpress () {
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length-1);

}

function checkans(ind) {
    if (userSeq[ind] === gameSeq[ind])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else
    {
        if(highscore < gameSeq.length-1){
        highscore = gameSeq.length-1;
        }
        overflash();
        h2.innerText = `Game Over, Press any key to start, Your score is ${level}`;
        h3.innerText = `The highscore is ${highscore}`;
        reset();
    }
}

function reset () {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}