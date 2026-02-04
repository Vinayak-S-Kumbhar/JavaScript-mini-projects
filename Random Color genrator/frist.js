// random Color genrator
let randomcolor = () =>{
    let Clenth = 6;
    let chars = "0123456789abcdef";
    let colorCode = "";
    for(let i=0; i<Clenth; i++){
        let randomnum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomnum, randomnum + 1);
    }
    return colorCode;
}

let coluring = () =>{
    let para = document.querySelectorAll(".para");
    para.forEach(element => {
        element.style.backgroundColor = `#${randomcolor()}`;
        element.innerText = `#${randomcolor()}`;
    });
}
coluring();