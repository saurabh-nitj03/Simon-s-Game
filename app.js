let gameSequence=[];
let usersequence=[];

let btns=['purple','blue','yellow','red']

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",()=>{
    // console.log("game started");
    if(started==false){
        started=true;
        levelUp();
    }
});

// function btnFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },1000);
// }; 

function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },200)
}


function levelUp(){
    usersequence=[];
    level++;
    h2.innerText=`Level ${level}`;

    let num=Math.floor(Math.random()*4);
    let randColor=btns[num];
    let ranBtn=document.querySelector(`.${randColor}`);
    gameSequence.push(randColor);
    console.log(gameSequence);
    // btnFlash(ranBtn);
    btnflash(ranBtn);
}

function checkColor(ind){
    if(usersequence[ind]===gameSequence[ind]){
        if(usersequence.length===gameSequence.length){
            setTimeout(levelUp,500)
        }
    } 
    else {
        h2.innerHTML=`Game Over ! Your score was <b> ${level-1}</b> <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },200)
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
    // btnFlash(btn);
    btnflash(btn);
    
   userColor= btn.getAttribute("id");
   usersequence.push(userColor);
   checkColor(usersequence.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSequence=[];
    usersequence=[];
    level=0; 
}