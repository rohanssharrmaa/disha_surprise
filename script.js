function changeScene(hide, show){

document.getElementById(hide)
.classList.add("hidden");


document.getElementById(show)
.classList.remove("hidden");

}



function openHeart(){

changeScene(
"rohanScene",
"heartScene"
);

}



function showDisha(){

changeScene(
"heartScene",
"dishaScene"
);

}



function moonScene(){

changeScene(
"dishaScene",
"moonScene"
);

}



function ending(){

changeScene(
"moonScene",
"ending"
);

}



// create petals

for(let i=0;i<40;i++){

let petal=document.createElement("div");

petal.innerHTML="🌸";

petal.className="petal";

petal.style.left=Math.random()*100+"%";

petal.style.animationDelay=
Math.random()*10+"s";


document.querySelector(".petals")
.appendChild(petal);

}
