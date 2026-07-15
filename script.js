async function loadComponents(){

const header = document.querySelector("#header");

const footer = document.querySelector("#footer");


if(header){

const response = await fetch("components/header.html");

header.innerHTML = await response.text();

}


if(footer){

const response = await fetch("components/footer.html");

footer.innerHTML = await response.text();

}

}


loadComponents();