// Passenger counting app

/*let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");
console.log(saveEl);
let count=0;
let hBtn=document.getElementById("Hbtn");
hBtn.addEventListener('click',function(){
    count+=1;
    countEl.innerText=count;
    console.log('You have clicked');
});
let sBtn=document.getElementById("save-btn");
sBtn.addEventListener('click',function() {
    let countStr=count+"-";
    saveEl.innerHTML+=countStr;
    // console.log(count);
    countEl.textContent=0;
    count=0;
});*/

// Simple Calculator

/*let num1=8;
let num2=2;
document.getElementById('num1-el').textContent=num1;
document.getElementById('num2-el').textContent=num2;
let aDD=document.getElementById('add');
aDD.addEventListener('click',function() {
    let res=num1+num2;
    document.getElementById('result-el').textContent="Result: "+res;
});

let sub=document.getElementById('subtract');
sub.addEventListener('click',function() {
    let res=num1-num2;
    document.getElementById('result-el').textContent="Result: "+res;
});

let mul=document.getElementById('multiply');
mul.addEventListener('click',function() {
    let res=num1*num2;
    document.getElementById('result-el').textContent="Result: "+res;
});

let div=document.getElementById('division');
div.addEventListener('click',function() {
    let res=num1/num2;
    document.getElementById('result-el').textContent="Result: "+res;
});*/

// Black Jack Game

let cards=[] // array of cards
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";


// console.log(cards);

// console.log(hasBlackJack);
// console.log(isAlive);
// console.log(message);
let messageEl=document.getElementById('message-el');
// console.log(messageEl);
let sumEl=document.getElementById('sum-el');

let cardsEl=document.getElementById('cards-el');

function getRandomCard() {
    let random = Math.floor(Math.random()*13)+1;
    if(random===1)
    {
        return 11;
    }
    else if(random>10)
    {
        return 10;
    }
    else{
        return random;
    }
}

function startGame() {
    isAlive=true;
    let firstcard=getRandomCard();
    let secondcard=getRandomCard();
    cards=[firstcard,secondcard];
    sum=firstcard+secondcard;
    renderGame();
}

function renderGame(){

    
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum;
    if(sum<=20)
    {
        message="Do You want to draw another card ?";
    }
    else if(sum===21){
        message="You have got the Blackjack!";
        hasBlackJack=true;
    }
    else
    {
        message="You are out of the game!";
        isAlive=false;
    }
    messageEl.textContent=message;
    
}

function newCard() {
   // console.log('new card drawn');
   if(isAlive===true && hasBlackJack===false){
   let card =getRandomCard();
   sum+=card;
   cards.push(card);
   // console.log(cards);
   renderGame();}
}
