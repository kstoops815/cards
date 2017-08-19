console.log("in the js file")

var cards = [];

var create = document.getElementById('createButton');
var text = document.getElementById('textArea');
var number = 0;

create.addEventListener('click', function(){
	buildDomString(text.value);
	console.log(text.value);
	addDeleteEventListener();
});


function writeToArray(){
	cards.push(text.value);
}

function addDeleteEventListener(){
	for(var i = 0; i<cards.length; i++){
	var button = document.getElementById(`delete_${number}`);
	button.addEventListener('click', remove);
	}
}

function remove(e){
	e.currentTarget.parentNode.removeChild(newCard);
	// var mainDivParent = document.getElementById('newCard');
	// mainDivParent.removeChild(divNode);
	// console.log("in delete card", divNode);
}

function buildDomString(card){
	console.log(text.value);
	number++;
	var domString = "";

	domString += "<section class='textField'>";
	domString += `<p>${card}</p>`;
	domString += `<button id='delete_${number}' type='button'>Delete</button>`;
	domString += "</section>";

	write(domString);
}

function write(pass){
	document.getElementById('newCard').innerHTML+=pass;
}





