
  //Start challenge 1:

var counter = 0;

function increment() {
  counter++;
  document.getElementById("count").innerHTML = counter;
}

function decrement() {
  counter--;
  document.getElementById("count").innerHTML = counter;
}

//Start challenge 2:

function validate(){
  
     var dollar = document.getElementById("convt").value;
     var result= document.getElementById("res");
     

     if(dollar===""){
        result.innerHTML="Please,check your data";
        return false
     } else if(isNaN(dollar)){
        result.innerHTML="Please,Enter Number Not Text";
        return false
     } else{
        result.innerHTML=dollar *50 + " Egyption Pound";
        return false;
     }
}
