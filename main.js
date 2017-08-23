var cats =[
	{name: "Fluffy", color: "Green", url: "https://i.ytimg.com/vi/JGjV__mueic/maxresdefault.jpg"},
	{name: "Patrick", color: "orange", url:"https://i.ytimg.com/vi/JGjV__mueic/maxresdefault.jpg"},
	{name: "Had", color: "pink", url: "https://metrouk2.files.wordpress.com/2015/03/ad_161478697.jpg?w=748&h=421&crop=1"},
	{name: "Jas", color: "blue", url:"https://i.pinimg.com/736x/05/c9/8a/05c98ad9c99a38282675c2f904c1468a--turkish-angora-cat-angora-cats.jpg"}

];

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