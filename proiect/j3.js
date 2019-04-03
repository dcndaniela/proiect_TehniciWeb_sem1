 window.onload=function(){	
	document.getElementById("c2").addEventListener("click", function(event){
  event.preventDefault()
});  //blocheaza executia lui Atmosfera din timpul meciurilor

}  
function myFunction() {
    var x = document.createElement("FIGCAPTION");
    var t = document.createTextNode("Pasiune mai presus de echipa");
    x.appendChild(t);
 
    var y = document.getElementById("myFigure");
y.appendChild(x);
}


function myFunc() {
	var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;/*returneaza top position(in pixeli) relativ fata de top position pentr offsetParinte 
*/

  if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }
}



