// Vanilla Javascript Portion

window.addEventListener('load', loadEventListeners);

function loadEventListeners() {
	document.getElementById('color-dd').addEventListener('click', changeTheBackground);
	document.getElementById('color-input').addEventListener('change', changeTheBackground);
	document.getElementById('form-1').addEventListener('submit', preventSubmit);


	var radioItems = document.getElementsByName('color-radio');
	for(var i = 0; i < radioItems.length; i++) {
		document.getElementById(radioItems[i].id).addEventListener('click', changeTheBackground);
	}


	var cbItems = document.getElementsByName('color-cb');
	for(var i = 0; i < cbItems.length; i++) {
		document.getElementById(cbItems[i].id).addEventListener('click', changeTheBackground);
	}


	var butItems = document.getElementsByName('color-but');
	for(var i = 0; i < butItems.length; i++) {
		document.getElementById(butItems[i].id).addEventListener('click', changeTheBackground);
	}


	var spanItems = document.getElementsByClassName('colorOption');
	for(var i = 0; i < spanItems.length; i++) {
		document.getElementById(spanItems[i].id).addEventListener('click', changeTheBackground);
	}

	function changeTheBackground() {
		var colorVal = this.value || this.id;
		document.getElementById('page').style.backgroundColor = colorVal;
		document.getElementById('nav').style.backgroundColor = colorVal;
		document.getElementById('content').style.backgroundColor = colorVal;
		document.getElementById('navBut1').style.backgroundColor = colorVal;
		document.getElementById('navBut2').style.backgroundColor = colorVal;
		document.getElementById('navBut3').style.backgroundColor = colorVal;
		document.getElementById('navBut4').style.backgroundColor = colorVal;
		document.getElementById('navBut5').style.backgroundColor = colorVal;
	}


	function preventSubmit(theEvent) {
		theEvent.preventDefault();
		document.getElementById('color-input').value = '';
	}

} //end of loadEventListeners






// jQuery portion



$(
		function() {
			$('#form-2').submit(
				function(e) {
					e.preventDefault();
			});	
			$('#form-2').on('change', '#color-input', changeBackground);
			$('#form-2 select').on('click', changeBackground);

			function changeBackground() {
				$('#page').css('background-color', this.value);
				$('#nav').css('background-color', this.value);
				$('#content').css('background-color', this.value);
			}
		} //end of master function
); //end of jQuery container
