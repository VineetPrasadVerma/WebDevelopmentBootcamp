var id = document.getElementById("first");
console.log(id);

var qs = document.querySelector("#first");
console.log(qs);

var cl = document.getElementsByClassName("special")[0];
console.log(cl);

var qscl = document.querySelector(".special");
console.log(qscl);

var qsall = document.querySelectorAll(".special")[0];
console.log(qsall);

var p = document.getElementsByTagName("p")[0];
console.log(p);

var pqs = document.querySelector("p");
console.log(pqs);

var qsall = document.querySelectorAll("p")[0];
console.log(qsall);

var inheritance = document.querySelector("h1 + p");
console.log(inheritance);
