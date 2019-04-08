var name=prompt("Enter your name please.");
    
function myfunction(){
    var v1=document.myform.q1.value;
    var v2=document.myform.q2.value;
    var v3=document.myform.q3.value;
    var v4=document.myform.q4.value;
    var v5=document.myform.q5.value;
    var v6=document.myform.q6.value;
    
    var count=0;
    
    if(v1== "<i>"){
        count++;
    }
    if(v2== "<b>"){
        count++;
    }
    if(v3== "content"){
        count++;
    }
    if(v4== "<div>"){
        count++;
    }
    if(v5== "src"){
        count++;
    }
    if(v6== "<br>"){
        count++;
    }
    
    alert(name+","+ " You got "+count+" correct answer/s!");
}

