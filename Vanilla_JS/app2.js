const h1 = document.querySelector((".hello h1 "))

function handleTitleClick(){
    const currnetColor = h1.style.color;
    let newColor;
    if(currnetColor === "blue"){
        newColor = "tomato";
    } else {
      newColor = "blue";  
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
