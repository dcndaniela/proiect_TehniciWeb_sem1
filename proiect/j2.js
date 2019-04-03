window.onload=function(){
	// repeat with the interval of 2 seconds
let timerId = setInterval(afis, 5000);

// after 3 seconds stop
setTimeout(function(){clearInterval(timerId); alert('Thank you!');}, 6000);
	
}

function afis(){
	alert('We use cookies to provide our services and for analytics and marketing.To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies.')
}


var myWindow;

function openWin() {
  myWindow = window.open("https://www.w3schools.com/jsref/prop_element_children.asp", "myWindow", "width=200,height=100");
  myWindow.document.write("Esti vizitatorul nostru cu numarul 200.004;     Iti multumim ca ne urmaresti!");
  
   var c = document.getElementById("eeu").children;
  c[1].style.backgroundColor = "yellow";

   var x = document.getElementById("eeu");
  
   if (x.className =="mystyle") { 
    x.style.fontSize = "30px";

}
}


function closeWin() {
  myWindow.close();
}


  
function myf(event) { 
  alert("Acest site utilizeaza cookies");
}

function showCoords(event) {
  var x = event.pageX;
  var y = event.pageY;
  var coords = 'X coords: ' + x + ', Y coords: ' + y;
  document.getElementById("demo").innerHTML = coords;
}

