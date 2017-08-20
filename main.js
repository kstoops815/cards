console.log("in the js file")

var cards = [];

var create = document.getElementById('createButton');
var text = document.getElementById('textArea');
var newCard = document.getElementById('newCard');

create.addEventListener('click', function(){
	writeToArray(text.value);
	text.value = "";
	buildDomString();
	addDeleteEventListener();
});


function writeToArray(strang){
	cards.push(strang);
}

function addDeleteEventListener(){
	for(var i = 0; i<cards.length; i++){
	var button = document.getElementById(`delete_${i}`);
	button.addEventListener('click', remove);
	}
}

function remove(e){
	newCard.removeChild(e.target.parentNode);
}

function buildDomString(){
	for(j = 0; j < cards.length; j++){
	var domString = "";

	domString += "<section class='textField'>";
	domString += `<p>${cards[j]}</p>`;
	domString += `<button id='delete_${j}' type='button'>Delete</button>`;
	domString += "</section>";
	}

	write(domString);
}


function write(pass){
	newCard.innerHTML+=pass;
}





