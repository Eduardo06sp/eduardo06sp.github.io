var cookieSplitter = decodeURIComponent(document.cookie);
var cookiePieces = cookieSplitter.split(';');

var name = cookiePieces[0];
var number = cookiePieces[1];
var verb = cookiePieces[2];
var door = cookiePieces[3];

window.addEventListener('load', showAnimal);




//code for displaying pet

function showAnimal() {

	var pet = {
		doorone: 'wolf',
		doortwo: 'doll',
		doorthree: 'monkey',
		doorfour: 'bird',
		doorfive: 'bear'
	}

	$('#petImg').html('<img src="images/' + door + '.jpg" alt="A picture of a ' + pet[door] + '" width="300" height="300">');
	$('#petMsg').html('Congratulations ' + name + ', you have won a ' + number + ' year old ' + verb + ' pet ' + pet[door] + '!');
}

