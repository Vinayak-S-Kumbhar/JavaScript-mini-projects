let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let btn = document.querySelectorAll("#btn");

let win = false;
let chance = "o";
let chengeChance = () =>{
    if(chance == "x"){
        chance = "o";
    }else{
        chance = "x";
    }
    return chance;
}

btn1.addEventListener("click", () =>{
    if(btn1.innerText == ""){
        let ch = chengeChance();
        btn1.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

btn2.addEventListener("click", () =>{
    if(btn2.innerText == ""){
        let ch = chengeChance();
        btn2.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

btn3.addEventListener("click", () =>{
    if(btn3.innerText == ""){
        let ch = chengeChance();
        btn3.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

btn4.addEventListener("click", () =>{
    if(btn4.innerText == ""){
        let ch = chengeChance();
        btn4.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

btn5.addEventListener("click", () =>{
    if(btn5.innerText == ""){
        let ch = chengeChance();
        btn5.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

btn6.addEventListener("click", () =>{
    if(btn6.innerText == ""){
        let ch = chengeChance();
        btn6.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

btn7.addEventListener("click", () =>{
    if(btn7.innerText == ""){
        let ch = chengeChance();
        btn7.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

btn8.addEventListener("click", () =>{
    if(btn8.innerText == ""){
        let ch = chengeChance();
        btn8.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

btn9.addEventListener("click", () =>{
    if(btn9.innerText == ""){
        let ch = chengeChance();
        btn9.innerText = ch;    
    }else{
        alert("not valid");
    }
    win == true ? location.reload() : 
    winner();
});

let winner = () =>{
    if(btn1.innerText == btn2.innerText && 
        btn1.innerText == btn3.innerText &&
        btn1.innerText != ""){
            alert(`${btn1.innerText} is win`);
        win = true;
    }
    if(btn1.innerText == btn4.innerText && 
        btn1.innerText == btn7.innerText &&
        btn1.innerText != ""){
            alert(`${btn1.innerText} is win`);
            win = true;
    }
    if(btn1.innerText == btn5.innerText && 
        btn1.innerText == btn9.innerText &&
        btn1.innerText != ""){
            alert(`${btn1.innerText} is win`);
            win = true;
    }
    if(btn2.innerText == btn5.innerText && 
        btn2.innerText == btn8.innerText &&
        btn2.innerText != ""){
            alert(`${btn2.innerText} is win`);
            win = true;
    }
    if(btn3.innerText == btn6.innerText && 
        btn3.innerText == btn9.innerText &&
        btn3.innerText != ""){
            alert(`${btn3.innerText} is win`);
            win = true;
    }
    if(btn4.innerText == btn5.innerText && 
        btn4.innerText == btn6.innerText &&
        btn4.innerText != ""){
            alert(`${btn4.innerText} is win`);
            win = true;
    }
    if(btn7.innerText == btn8.innerText && 
        btn7.innerText == btn9.innerText &&
        btn7.innerText != ""){
            alert(`${btn7.innerText} is win`);
            win = true;
    }
    if(btn7.innerText == btn5.innerText && 
        btn7.innerText == btn3.innerText &&
        btn7.innerText != ""){
            alert(`${btn7.innerText} is win`);
            win = true;
    }
    
}


