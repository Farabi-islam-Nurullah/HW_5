
function myfunction(){
   
     
    var latter = /^[A-Za-z]+$/;
   var a = document.getElementById("imputbox1").value;
   document.getElementById("number1").innerHTML= a;
   var b = document.getElementById("imputbox2").value;
   document.getElementById("number2").innerHTML= b;
   var a3 = document.getElementById("imputbox3").value;
   document.getElementById("number3").innerHTML= a3;
   var a4 = document.getElementById("imputbox4").value;
   document.getElementById("number4").innerHTML= a4;
   var a5 = document.getElementById("imputbox5").value;
   document.getElementById("number5").innerHTML= a5;
   var a6 = document.getElementById("imputbox6").value;
   document.getElementById("number6").innerHTML= a6;


   if(a == ""){
    document.getElementById("message").innerHTML= " ! please input valid number";
   } else if (a < 1 ){
    document.getElementById("message").innerHTML=  "! please input gatter than one";
   } else if (a > 100 ){
    document.getElementById("message").innerHTML=  "! please input less than 100";
   } else if (a.match(latter) ){
    document.getElementById("message").innerHTML=  "! please input number";
   }


 var x = +a + +b + +a3 + +a4 + +a5 + +a6;
 document.getElementById("totaladding").innerHTML = x;

var y =x/6
 document.getElementById("totalDivision").innerHTML = y;

 if(y<33){
    document.getElementById("gratingPoint").innerHTML = "F";
 } else if(y< 40){
    document.getElementById("gratingPoint").innerHTML = "D";
 } else if(y< 50){
    document.getElementById("gratingPoint").innerHTML = "C";
 } else if(y< 60){
    document.getElementById("gratingPoint").innerHTML = "B";
 } else if(y< 70){
    document.getElementById("gratingPoint").innerHTML = "A";
 } else if(y< 80){
    document.getElementById("gratingPoint").innerHTML = "A-";
 }else if(y< 100){
    document.getElementById("gratingPoint").innerHTML = "A+";
 }else{
    document.getElementById("gratingPoint").innerHTML = "NOT FOUNd";
 }

}