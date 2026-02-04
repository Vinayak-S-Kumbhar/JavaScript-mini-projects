let celsius = document.querySelector(".celsius");
let fahrenheit = document.querySelector(".fahrenheit");
let kelvin = document.querySelector(".kelvin");

celsius.addEventListener("input", (event)=>{
    let fara = celsius.value * 9/5 + 32;
    let kelvi = +celsius.value + 273.15;
    fahrenheit.value = fara;
    kelvin.value = kelvi;
    if(celsius.value == ""){
        fahrenheit.value = "";
        kelvin.value = "";
    }
    
});

fahrenheit.addEventListener("input", (event)=>{
    let celci = (fahrenheit.value - 32) * 5/9;
    let kel = (fahrenheit.value - 32) * 5/9 + 273.15;
    celsius.value = celci;
    kelvin.value = kel;
    if(fahrenheit.value == ""){
        celsius.value = "";
        kelvin.value = "";
    }
});

kelvin.addEventListener("input", (event)=>{
    let c = kelvin.value - 273.15;
    let f = (kelvin.value - 273.15) * 9/5 + 32;
    celsius.value = c;
    fahrenheit.value = f;
    if(kelvin.value == ""){
        celsius.value = "";
        fahrenheit.value = "";
    }
});
