let myscore = 0;
let compscore = 0;

let compchoic =()=>{
    let arr = ["stone","paper","scissors"];
    let num = Math.floor(Math.random()*3);
    return arr[num];
}

let drow = () => {
    let mes = document.querySelector(".msg");
    mes.innerText = "game is drow";
}
let display = (userwin,compchoice,userchoice) =>{
    if(userwin === true){
        myscore++;
        let youscore = document.querySelector(".user-score");
        youscore.innerText = myscore;
        let mes = document.querySelector(".msg");
        mes.innerText = `you win! your ${userchoice} beats ${compchoice}`;
    }else{
        compscore++;
        let comscr = document.querySelector(".comp-score");
        comscr.innerText = compscore;
        let mes = document.querySelector(".msg");
        mes.innerText = `computer win! cpmputer choise ${compchoice} beats ${userchoice}`;
    }
}
let playgame = (userchoice) => {
    let compchoice = compchoic();
    if(compchoice === userchoice){
        drow();
    }else{
        let userwin = true;
        if(userchoice === "stone"){
            if(compchoice === "paper"){
                userwin = false;
            }else{
                userwin = true;
            }
        }else if(userchoice === "paper"){
            if(compchoice === "scissors"){
                userwin = false;
            }else{
                userwin = true;
            }
        }else if(userchoice === "scissors"){
            if(compchoice === "stone"){
                userwin = false;
            }else{
                userwin = true;
            }
        }
        display(userwin,compchoice,userchoice);
    }
}


let choice = document.querySelectorAll(".choice");

choice.forEach((element) => {
    element.addEventListener("click", () =>{
        let userchoice = element.getAttribute("id");
        playgame(userchoice);
    });
});

