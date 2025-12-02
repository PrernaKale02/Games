var names = new Array("Car Game", "Number Guessing Game", "Rock Paper Scissors");
var images = new Array(
	"/imgs/car.png",
	"/imgs/number.jpg",
	"/imgs/rps.jpg"
);
var games = new Array("car.html", "num-guesser.html", "rps.html");
var count = 0;
function slide(index) {
	count += index;
	if (count > images.length - 1) {
		count = 0;
	}
	if (count < 0) {
		count = images.length - 1;
	}
	document.getElementById("img").style.transform = "scale(0.8)";
	setTimeout(function () {
		document.getElementById("img").src = images[count];
		document.getElementById("img").style.transform = "scale(1)";
	}, 500);
    var name = document.getElementById("name");
    name.innerText = names[count];
    var link = document.getElementById("link");
    link.href = games[count];
}
