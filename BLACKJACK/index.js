

let sum=0
let cards=[]

let isalive=false
let hasblackjack=false
let message=""

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")

let player={
	name:"Per: ",
	chips:125
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+"$"+player.chips

function getrandom() {
	// body...
	let ans=Math.floor(Math.random()*13)+1
	if(ans===1) ans=11
	if(ans>10) ans=10
	return ans
}
function start(){
    
    isalive=true
   // cards=[]
   // sum=0
	let first=getrandom()
	let second=getrandom()
	sum=first+second

	cards.push(first)
	cards.push(second)
	rendergame()
}

function rendergame(){
    cardEl.textContent="Cards: "
   
    for(let i=0; i<cards.length;  i++){
            
            cardEl.textContent+=cards[i]+" "
    }

	sumEl.textContent="Sum: "+sum
if(sum<=20){
	message=("Do you want to draw a new card ?")
	
}
else if(sum===21){
	message=("You've got blackjack !")
    hasblackjack=true
}
else{
	message=("You're out of the game!")
	isalive=false
	}
   messageEl.textContent=(message)
}

function newcard(){
	
	if(isalive===true && hasblackjack===false){
		let card=getrandom()
	sum+=card
	cards.push(card)
	rendergame()
	}
	
}




