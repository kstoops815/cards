console.log("in the js file")

document.getElementById('createButton').addEventListener('click', function(){
	buildDomString(document.getElementById('textArea'));
});

function buildDomString(card){
	var domString = "";

	domString += "<section class='textField'>";
	domString += `<p>${card.value}</p>`;
	domString += "</section>";
	domString += "<div class='deleteButton'><div>";

	write(domString);
}

function write(pass){
	document.getElementById('newCard').innerHTML=pass;
}

//var cards = buildDomString(card);

