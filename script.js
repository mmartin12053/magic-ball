function magicBallGo(){
    var input = document.getElementById('dave').value;
     console.log(input); 
     document.getElementById('output').innerHTML = "your question -----> " + input;
      random = Math.floor(Math.random()*10+1);
       switch(random){
           case 1: answer = "As I see it, yes.";
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 2: answer = "Ask again later."; 
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 3: 
           answer = "Better not tell you now."; 
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 4: 
           answer = "Cannot predict now."; 
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 5: 
           answer = "Concentrate and ask again."; 
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 6: 
           answer = "Don’t count on it."; 
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 7: answer = "It is certain."; 
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 8: 
           answer = "It is decidedly so."; 
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 9: 
           answer = "Most likely."; 
           console.log(answer);
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; 
           case 10: 
           answer = "My reply is no."; 
           console.log(answer); 
           document.getElementById('answer').innerHTML = "your answer ----->" + answer; 
           break; }
        }