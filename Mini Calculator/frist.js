// Calculator project
let btns = document.querySelectorAll(".btn");
let inp = document.querySelector(".inp");

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let button = btn.textContent;
        if(button === "AC"){
            inp.value = "";
        }else if(button === "="){
            inp.value = eval(inp.value);
        }else{
            inp.value += button;
        }
    });
});
