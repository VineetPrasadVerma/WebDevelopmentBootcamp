var secretNumber = 4;

var answer = Number(prompt("Guess a Number !!"));

while (answer !== secretNumber)
{
    if(answer < secretNumber){
        alert("Too Low ! Try Again!");
        answer = Number(prompt("Guess a Number !!"));
    }
    else{
        alert("Too High! Try Again!");
        answer = Number(prompt("Guess a Number !!"));   
    }
}

alert("Yay !! you guessed it right.");