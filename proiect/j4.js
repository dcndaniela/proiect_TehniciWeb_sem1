window.onload=function(){
var x2=document.getElementById("st1");
x2.onclick=salut;
var x3=document.getElementById("but2");
//b1.sterg;


//localStorage 

if (typeof(Storage) !== "undefined") {
  if (localStorage.pagecount) {
    localStorage.pagecount = Number(localStorage.pagecount)+1;
  } else {
    localStorage.pagecount = 1;
  }
  document.getElementById("cam1").innerHTML = "You have visited this page " + localStorage.pagecount + " time(s).";
} else {
  document.getElementById("cam1").innerHTML = "Sorry, your browser does not support web storage...";
}

}

function salut(){
var x= document.getElementById("st1");
y=x;
alert ("Acest site utilizeaza cookies.Navigand pe acest site va manifestati acordul cu privire la prelucrarea datelor.");
y.src="stadion2.jpg";
x.style.width="50%";
x.style.border="solid green 10px";
x.style.borderRadius="100px";
x.onclick=hei;
}

function hei(){
var x=document.getElementById("st3");
 y=x;
 alert("stadionul inaintea lucrarilor de demolare");
y.src="stadion3.jpg";
x.style.width="50%";
x.style.border="solid green 10px";
x.style.borderRadius="100px";
x.onclick=revenire;
}


function revenire(){
var x=document.getElementById("st1");
x.src="stadion.jpg";
//x.style="auto";
x.onclick=hei;
}

function sterg() {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
}

 
function stad4() {
    var x = document.createElement("FIGCAPTION");
    var t = document.createTextNode("Fig.2 -In prezent:dupa initierea demolarilor");
    x.appendChild(t);
    var y = document.getElementById("st4");
   y.appendChild(x);
}

function stad5() {
    var x = document.createElement("FIGCAPTION")
    var t = document.createTextNode("Fig.3 -In viitor(2019-2020)");
    x.appendChild(t);
    var y = document.getElementById("st5");
    y.appendChild(x);
}

function stad6() {
    var x = document.createElement("FIGCAPTION");
    var t = document.createTextNode("Fig.1 -trecut('50)");
    x.appendChild(t);
    var y = document.getElementById("st6");
    y.appendChild(x);
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) { /*returneaza data care e trasa(imaginea) */
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


