var windowVar;

document.getElementById('nameButton').addEventListener('click', newWindow);

function newWindow() {
	windowVar = window.open('about:blank','myWin','width=400, height=400');
	var textBoxValue = document.getElementById('nameField').value;
	// alert('It\'s working');
	windowVar.document.write('<head><link href="css/styles.css" type="text/css" rel="stylesheet" /></head><body style="background-color: lightgrey;"');
	windowVar.document.write('<div style="color: red; font-weight: bold; text-align: center;">');
	windowVar.document.write('<div style="color: blue; text-decoration: underline;">Hello ' + textBoxValue + '</div>');
	windowVar.document.write('<br /><br />');
	windowVar.document.write(textBoxValue + ' is the greatest! <br /><br />');
	windowVar.document.write(textBoxValue + ', please read the entire page before continuing. <br /><br />');
	windowVar.document.write('Remember, there are people who believe they\'re the \"best\" at something, but there\'s always someone better and worse. <br /><br />');
	windowVar.document.write('Thanks for reading this, ' + textBoxValue + ', you may now close this window.  <br /><br />');
	windowVar.document.write('<input id="closeButton" type="button" value="Close Window" />');
	windowVar.document.write('</div><br /><br />');
	windowVar.document.write('</body>');
	windowVar.document.getElementById('closeButton').addEventListener('click', closeWindow);
}

function closeWindow() {
	windowVar.close();
}
