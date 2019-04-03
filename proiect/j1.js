function changeText2(event){
	var userInput = document.getElementById('userInput').value;
	document.getElementById('boldStuff2').innerHTML = 'Multumim pentru abonare, '+ userInput;
	var x=event.key;
	
	//Nu mergeeeee
   //document.getElementById("myb").addEventListener("click", function(){document.getElementById("demo").innerHTML = "Hello World";},true);

	}
  
//clasa array
var numbers=[-7,-10,-4,-17,-7,-5,-3,-8,-2,-3,-20,-2,-3,-1,-1,-1,-4,-5,-2,-2]
function getSum(total, num) {
  return total + num;
}
function myFunction(item) { 
  //clasa string
   var str = "goluri din 20 meciuri";
  var res = str.toLocaleUpperCase();
  //folsesc math
  document.getElementById("dep").innerHTML = Math.abs(numbers.reduceRight(getSum))+' '+res;  /* reduce executa functia de la st la dr;
  total-valoare returnata anterior de functie
  number-valoarea elem curent */

 //clasa date
var d = new Date();
  var n = d.getHours();
   var m = d.getMinutes();
  document.getElementById("data").innerHTML = n+'h'+':'+m+'m';
 
  }