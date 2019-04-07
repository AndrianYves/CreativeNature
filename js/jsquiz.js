function corrector(){

var ques1 = document.quiz.ques1.value;
var ques2 = document.quiz.ques2.value;
var ques3 = document.quiz.ques3.value;
var correctAns = 0;
    
    if (ques1 == "literals"){
        correctAns++;
    }
    
    if (ques2 == "identifiers"){
        correctAns++;
    }
    
    if (ques3 == "statements"){
        correctAns++;
    }
    
    var messages = ["Good", "Well Played", "Try Again Next Time"];
    
    var score;
    
    if (correctAns < 1){
        score = 2;
    }
    
    if (correctAns > 0 && correctAns < 3){
        score = 1;
    }
    
    if (correctAns > 2){
        score = 0;
    }
   
 document.getElementById("after_submit").style.visibility = "visible";
   
   document.getElementById("message").innerHTML = messages[score]; 
    
    document.getElementById("number_correct").innerHTML = "Your total correct answers: " + correctAns;
}