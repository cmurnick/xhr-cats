

var CatCoralDiv = document.getElementById("kat-koral");



function domString() {
	var catString = "";
	console.log(cats);
	for(var i = 0; i < cats.length; i++) {
	

		catString += '<section>'; 
		catString	+= '<h1>' + cats[i].name + '</h1>';
		catString += '<h2>' + cats[i].color + '</h2>';
		catString += `<img src=${cats[i].url}>`;
		catString += '</section>'

	}
		
		writeToDom(catString);
}


function writeToDom(strang) {
	CatCoralDiv.innerHTML += strang;
}



domString(cats);