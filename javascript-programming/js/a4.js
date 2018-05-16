$(function() {

	var $list, $addItemForm, $addItemButton;
	$list = $('#toDoList');
	$addItemForm = $('#addItemForm');
	$addItemButton = $('#addItemButtonContainer');


	$addItemForm.on('submit', function(e) {
		e.preventDefault(); //don't submit anything
		var text = $('#itemDescription:text').val();
		var date = $('#itemDate').val();
		$list.append('<li id="todoLi">' + text + '<br />' + 'Due date: <span id="liDate">' + date + '</span></li>');




		/*** EXTRA CREDIT ATTEMPT ***/

		/*** var liDeadlines = $('#toDoList').find('li').value.toArray();

		var $liDate = $('#liDate');
		alert($liDate.text());

		liDeadlines
			.sort(function(a,b) {
				var $liDate = $('#liDate');
				a = $(a).$liDate.text();
				b = $(b).$liDate.text();

				return function(a, b) {
					a = new Date(a);
					b = new Date(b);

					return a - b;}
			}); //end of sort

		alert(liDeadlines);
		$list.append(liDeadlines);
		$('input:text').val(''); //clear all input ***/

		$('#todoLi').sort(function(a,b) {
				return new Date($(a).getDate($liDate)) > new Date($(b).getDate($liDate));})
			 .each(function() {
				$list.append(this);})

		$('input:text').val('');

	}); //end of submit event

	$('#itemDate').datepicker({dateFormat: 'MM d, yy'});














}); //end of container function & script
