var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var isWhite = true
setInterval(function(){
    if(isWhite){
        body.style.background = "white";
        h1.style.color = "green";
    } 
    else{
        body.style.background = "blue";
        h1.style.color = "orange";
        }
    isWhite = !isWhite;
}, 1000);