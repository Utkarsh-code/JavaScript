

let count=document.getElementById("cnt")
let cou=0;

function increment() {
	// body...
	cou+=1
	count.textContent=cou
}

let saveEl=document.getElementById("save-el")

function save(){
	let countstr=cou+" - "
    saveEl.textContent += countstr
    cou=0;
    count.textContent=cou
}

console.log("let count the people in the subways!")