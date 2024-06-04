let gameseq  = [];
let userseq = [];

let btns = ["yellow", "red","green", "purple"];

let started = false;
let level = 0;
let hscore = 0;


let h2 = document.querySelector("h2");
let hiscore = document.querySelector("h3");


document.addEventListener("keypress", function () {
    if(started == false){
    console.log("game started");
    started = true;

    levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");         
    }, 260);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");         
    }, 260);
}

function levelup() {
    userseq = [];
    level++;
   
    if(level > hscore){
        hscore = level;
        hiscore.innerText = `HIGHEST SCORE ${hscore}`;
    }
    
    h2.innerText = `level ${level}`;
    hiscore.innerText = `HIGHEST SCORE ${hscore}`;

    let randind = Math.floor(Math.random() * 3);
    let randcolor = btns[randind];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}


function checkans(idx){
    
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup ,1000);
            hiscore.innerHTML = `HIGHEST SCORE :<b> ${hscore}</b> `;
            
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b> ${level}</b> <br> press any key to start.`;
        
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function()  {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        
        reset();
    }
}

function btnpress(){
  
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    //console.log(usercolor);
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameseq =[];
    userseq = [];
    level =0;
    
}


