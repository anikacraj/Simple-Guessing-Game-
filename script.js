var randomNumber = Math.floor(Math.random() * 21);
console.log(randomNumber);
var inputClass =document.getElementsByClassName("input");
var submitButton =document.getElementById("submit");
submitButton.getAttribute("input");


// document.getElementById('submit').addEventListener('click', function() {
//     var userInput = document.getElementById('input').value;
//     console.log(userInput);

// }

 document.getElementById("restart").addEventListener("click",function(){
    location.reload();

 })


var random=document.getElementById("random");
var givenNumber1=document.getElementById("given-number1");
var givenNumber2=document.getElementById("given-number2");
var givenNumber3=document.getElementById("given-number3");
var shadow =document.getElementById("shadow");
var small =document.getElementById("small");
random.textContent=randomNumber;
let attemptCounter = 0;

document.getElementById("submit").addEventListener("click",function(){
    attemptCounter++;
   
    var u =document.getElementById("input").value;
    console.log(u);
     document.getElementById('attempts').textContent = 'Attempts: ' + attemptCounter;

givenNumber3.style.display="none"
givenNumber2.style.display="none"
givenNumber1.style.display="none"



    //information section :

    if(randomNumber == u){
       
        givenNumber3.style.display="block";
        shadow.style.bottom="0";
        shadow.style.display="none";
        random.style.opacity="100";
        random.style.fontWeight="1000";
      small.style.opacity=0;
        random.style.backgroundColor="white"

    
}
    else if(randomNumber > u){
       
            givenNumber2.style.display="block";

        
    }
    else{
        
            givenNumber1.style.display="block";
        
    }
   
});



