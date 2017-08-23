

var CatCoralDiv = document.getElementById("kat-koral");



function domString(cats) {
	var catString = "";
	// console.log(cats);
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



// domString(cats);
var cats = []
function executeThisCodeAfterFileLoads (){
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	domString(data.cats);



	// cats = dats.cats;
	// myRequest2.send();
}

function executeThisCodeAfterFileLoads2 (){
	// console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	domString(data.dogs);


	// domString(cats);
}

function executeThisCodeIfFileErrors (){
	console.log("Shit's broke");

}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "cats.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
myRequest2.open("GET", "dogs.json");
myRequest2.send();









