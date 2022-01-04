const title = document.querySelector((".hello h1 "))

function handleTitleClick(){
	title.style.color= "blue";
}

function handleTitleEnter(){
	title.innerText = "Hi";
}

function handleTitleLeave(){
	title.innerText = "Bye";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleTitleEnter);
title.addEventListener("mouseleave", handleTitleLeave);

