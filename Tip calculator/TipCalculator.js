let btn = document.querySelector(".btn");

btn.addEventListener("click", () =>{
    let amount = document.querySelector(".num");
    let percentage = document.querySelector(".percent");
    let tipamount = Math.floor((amount.value * (1 + percentage.value / 100) - amount.value)+0.5);
    let total = Math.floor(+amount.value + tipamount);

    let print = document.querySelector(".total");
    let tip = document.querySelector(".tip");

    tip.innerText = `Tip : ${tipamount}`;
    print.innerText = `Total Amount : ${total}`;
});
