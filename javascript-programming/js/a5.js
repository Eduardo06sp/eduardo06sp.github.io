var name, number, verb, door;



// Dependencies: jQuery



//EXTRA CREDIT

$(document).ready(function checkCookie() {
	if(document.cookie > -1) {
		//no cookies found
	} else {
		$('#content').prepend('<div id="cookieFoundNotif">You have already selected an animal! <a href="a5Cookies.html">Click here</a> to view your animal.</div>');
	}
});



(function() {
	document.forms.submit.noValidate = true;
	//--------------------------------------------------
	//  A) ANONYMOUS FUNCTION TRIGERRED BY THE SUBMIT EVENT
	//--------------------------------------------------
	$('form').on('submit', function(e) {
		e.preventDefault();
		var elements = this.elements;
		var valid = {};
		var isValid;
		var isFormValid;

		// PERFORM GENERIC CHECKS (calls functions outside of the event handler)
		var i;
		for(i = 0, l = elements.length; i < l; i++) {
			isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
			if (!isValid) { //if tests fail
				showErrorMessage(elements[i]);
			} else {
				removeErrorMessage(elements[i]); //remove error messages if pass
			}
			valid[elements[i].id] = isValid; //add to isValid
		} //end of for loop



		// COOKIES

		function makeCookies() {
			var cookiePieces = name + ';' + number + ';' + verb + ';' + door;

			document.cookie = encodeURIComponent(cookiePieces) + ';expires=' + ['Sunday, 28-Jan-2018 07:59:59 GMT'];

			document.location = 'a5Cookies.html';
		}//end makeCookies()



		//CHECK FORM

		for(var field in valid) { //check valid
			if(!valid[field]) { //if it is NOT valid
				isFormValid = false;
				break; //stop the loop since there is an error
			}
			isFormValid = true;
		}//end of for loop

		if(isFormValid) {
			makeCookies();
		}

	});  // End of event handler anonymous function
	// END: anonymous function triggered by submit button



	//--------------------------------------------------
	//  B) GENERIC VALIDATION FUNCTIONS
	//--------------------------------------------------

	// CHECK IF FIELD IS REQUIRED, IF SO, DOES IT HAVE A VALUE?
	// Relies on isRequired() and isEmpty() (BOTH SHOWN BELOW)
	// Relies on setErrorMessage() (SHOWN LATER)
		function validateRequired(el) {
			if(isRequired(el)) {
				var valid = !isEmpty(el);
				if(!valid) { //if valid = false
					setErrorMessage(el, 'Field is required');
				}
				return valid;
			}//end of if statement
			return true; //clears if not required (not used in this particular example since they're all required)
		}//end validateRequired()

		// CHECK IF ELEMENT IS REQUIRED
		// Called by validateRequired() (SHOWN ABOVE)
		function isRequired(el) {
			return ($('label').hasClass('required'));
		}

		// CHECK IF ELEMENT IS EMPTY OR IF VALUE IS SAME AS PLACEHOLDER TEXT
		// HTML5 browsers allow users to enter placeholder text
		// Called by validateRequired() (SHOWN ABOVE)
		function isEmpty(el) {
			return !el.value || el.value === el.placeholder; //check for empty field, older browser code included
		}

		// CHECK IF VALUE FITS WITH THE TYPE ATTRIBUTE
		// Relies on the validateType object (SHOWN TOWARDS END)
		function validateTypes(el) {
			if(!el.value) return true; //if there is no input, there's nothing to validate, thus returning true is used to stop the rest of the script from executing

			var nameValidate = el.getAttribute('name');
			if(typeof validateType[nameValidate] === 'function') {
				return validateType[nameValidate](el); //check if value validates
			} else {
				return true; //cannot be tested, so return true
			}
		}//end validateTypes()



		//--------------------------------------------------
		//  C) FUNCTIONS TO SET / GET / SHOW / REMOVE ERROR MESSAGES
		//--------------------------------------------------

		function setErrorMessage(el, message) {
			$(el).data('errorMessage', message); //store error message w/ element
		}

		function getErrorMessage(el) {
			return $(el).data('errorMessage') || el.title;
		}

		function showErrorMessage(el) {
			var $el = $(el); //element w/ error
			var errorContainer = $el.siblings('.error.message');

			if(!errorContainer.length) { //if no errors exist with element
				errorContainer = $('<span class="error message"></span>').insertAfter($el);
			}
			errorContainer.text(getErrorMessage(el)); //add error message
		}//end showErrorMessage()

		function removeErrorMessage(el) {
			var errorContainer = $(el).siblings('.error.message');
			errorContainer.remove();
		}//end removeErrorMessage()



		//--------------------------------------------------
		//  D) OBJECT FOR MANUAL VALIDATION
		//--------------------------------------------------

		var validateType = {

			name: function(el) {

				var valid = /^[a-z]+$/i.test(el.value);
				if(!valid) { //if it is NOT valid
					setErrorMessage(el, 'Please enter letters only');
				}
				name = el.value;
				return valid;
			},
			number: function(el) {

				var valid = /^\d+$/.test(el.value);
				if(!valid) { //if it is NOT valid
					setErrorMessage(el, 'Please enter numbers only');
				}
				number = el.value;
				return valid;
			},
			verb: function(el) {

				var valid = /[a-z]ing$/i.test(el.value);
				if(!valid) { //if it is NOT valid
					setErrorMessage(el, 'Please enter a word ending in "ing"');
				}
				verb = el.value;
				return valid;
			},
			doorSelection: function(el) {

				if($('#doorSelectionCont input:checked').length > 0) {
					valid = true;
				} else {
					valid = false;
				}
				if(!valid) { //if it is NOT valid
					setErrorMessage(el, 'Please select one');
				}
				door = $('#doorSelectionCont input:checked').val();
				return valid;
			}
		};//end of validType
}());//end of IIFE
