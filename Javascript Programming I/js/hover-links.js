window.addEventListener('load', createEventListeners);

function createEventListeners() {
	document.getElementById('navBut1').addEventListener('mouseover', changeTheLink);
	document.getElementById('navBut2').addEventListener('mouseover', changeTheLink);
	document.getElementById('navBut3').addEventListener('mouseover', changeTheLink);
	document.getElementById('navBut4').addEventListener('mouseover', changeTheLink);
	document.getElementById('navBut5').addEventListener('mouseover', changeTheLink);
	document.getElementById('navBut1').addEventListener('mouseout', changeTheLinkBack);
	document.getElementById('navBut2').addEventListener('mouseout', changeTheLinkBack);
	document.getElementById('navBut3').addEventListener('mouseout', changeTheLinkBack);
	document.getElementById('navBut4').addEventListener('mouseout', changeTheLinkBack);
	document.getElementById('navBut5').addEventListener('mouseout', changeTheLinkBack);
}

function changeTheLink() {
	// alert('It\'s working!');
	this.className = 'buttonsOver';
}

function changeTheLinkBack() {
	// alert('It\s working!');
	this.className = 'buttonsOut';
}
