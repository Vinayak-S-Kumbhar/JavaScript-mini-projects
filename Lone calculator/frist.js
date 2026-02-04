//Lone calculater
let btn = document.querySelector(".btn");
let amount = document.querySelector(".amount");
let interest = document.querySelector(".interest");
let months = document.querySelector(".months");
let result = document.querySelector(".result");


btn.addEventListener("click", ()=>{
    let amo = amount.value *  (1 + interest.value /100);
    let res = amo / months.value;
    result.innerText = `Monthly Payment : ${Math.floor(res)}`;
});