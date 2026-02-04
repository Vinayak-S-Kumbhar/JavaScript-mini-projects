// add random images
let URL = "https://dog.ceo/api/breeds/image/random";
let btns = document.querySelector(".btn");
btns.addEventListener("click",()=>{

    for(let i=0; i<5; i++){
        let fun = async () =>{
            console.log("Getting data ...");
            let responce = await fetch(URL);
            let data = await responce.json();
            console.log(data.message);
            create(data.message);
        }
        fun();
    }
});

let create = (link) =>{
    let i = document.createElement("img");
    i.style.width = "200px";
    i.style.height = "200px";
    i.style.margin = "30px";
    i.src = link;
    btns.before(i);
}
