// Dice Roll Simulator
let btn = document.querySelector(".btn");
let number = () =>{
    return Math.floor(Math.random() * 6);
}
let n = 1;
let create = (num) =>{
    let para = document.createElement("p");
    para.innerText = `Roll num ${n} :  ${num}`;
    n++;
    btn.after(para);
}

btn.addEventListener("click", ()=>{
    let p = document.querySelector(".p");
    let nu = number();
    p.innerText = nu;
    create(nu);
});
