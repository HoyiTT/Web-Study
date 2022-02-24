const h1 = document.querySelector((".hello h1 "))

function handleTitleClick(){
	h1.style.color= "blue";
}

function handleTitleEnter(){
	h1.innerText = "Hi";
}

function handleTitleLeave(){
	h1.innerText = "Bye";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handelWindwowOffline(){
    alert("SOS no WiFI");
}

function handelWindowOnline(){
    alert("ALL GOOD!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleTitleEnter);
h1.addEventListener("mouseleave", handleTitleLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);