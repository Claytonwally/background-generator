let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let colran3000 = document.querySelector("#colran3000");

const setGradient=()=> {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

const randomGradient=()=> {

	let random1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	let random2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	body.style.background = 
	"linear-gradient(to right, " 
	+ random1
	+ ", " 
	+ random2
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
colran3000.addEventListener("click", randomGradient);

setGradient();