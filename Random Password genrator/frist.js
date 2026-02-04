// Random password genrate and copy
let pass = document.querySelector(".pass");
let btn = document.querySelector(".btn");
let copy = document.querySelector(".copy");

btn.addEventListener("click", ()=>{
    let password = randomPass();
    pass.innerText = password;

});

copy.addEventListener("click", ()=>{
    let pass = document.querySelector(".pass");
    navigator.clipboard.writeText(pass.innerText);
    console.log(pass.innerText);
});

let randomPass = () =>{
    let passlenth = 10;
    let chars = "asdfghjklzxcvbnmqertyuiop1234567890!@#$%^&*_|/*-+";
    let passw = "";
    for(let i=0; i<passlenth; i++){
        let num = Math.floor(Math.random() * chars.length);
        passw += chars.substring(num , num+1);
    }
    return passw;
}

