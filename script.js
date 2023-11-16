'use strict';
/*
document.querySelector('.message').textContent="correct number";
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent='?';
document.querySelector(".score").textContent=14

// console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value=1;

console.log(document.querySelector('.guess').value)
*/
let s_number=Math.trunc(Math.random()*20+1);

let score=Number(document.querySelector('.score').textContent);
let attemps=Number(document.querySelector('.attemps').textContent);
// console.log(score)
let displayMeassage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    if(!guess){
        // document.querySelector('.message').textContent="not allowed";
        displayMeassage("not allowed");
    }else if(guess===s_number){
        // document.querySelector('.message').textContent="correct number";
        displayMeassage("correct number");
        // document.querySelector(".number").textContent=s_number;
        // score=score+1;
        document.querySelector('.score').textContent=score;
        document.querySelector('.attemps').textContent=attemps;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').textContent=guess;
        document.querySelector('.number').style.width='30rem';
        // if(score>1){
        //     hs=score;
        //     document.querySelector('.highscore').textContent=score;
        // }
    }else if(guess!==s_number){
        if(score>=-10){
            // document.querySelector('.message').textContent=guess>s_number?"Too high":"Too low";
            displayMeassage(guess>s_number?"Too high":"Too low");
            score--;
            attemps++;
            document.querySelector('.score').textContent=score;
            document.querySelector('.attemps').textContent=attemps;
        }
        else{
            document.querySelector('.message').textContent='U lost';
            document.querySelectorAll('.score').textContent=-10;
        }
    }})
//     }  else if(guess>s_number){
//         if(score>=-10){
//         document.querySelector('.message').textContent="Too high";
     
//         score=score-1;
//         document.querySelector('.score').textContent=score;}
//         else{
//             document.querySelector('.message').textContent="You lost";
//         }
//     }
//     else if(guess<s_number){
//         if(score>=-10){
//         document.querySelector('.message').textContent="Too low";
        
//         score=score-1
//         document.querySelector('.score').textContent=score;
//         }
//         else{
//             document.querySelector('.message').textContent="You lost";
//         }
//     }
// });
document.querySelector('.again').addEventListener('click',function(){
    let guess=Number(document.querySelector('.guess').value);
    score=0;
    attemps=0;
    s_number=Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent="Start guessing";
    document.querySelector('.score').textContent=score;
    document.querySelector('.attemps').textContent=attemps;
    document.querySelector(".number").textContent="?";
    document.querySelector('.guess').value="";
   
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
   
})
