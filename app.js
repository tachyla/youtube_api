var OMDB_URL = "https://www.omdbapi.com/";
var query = {
	s: 'batman',
	r: 'json'
};


let userInput = $("#searchbar").val();

$(document).ready(function() {

	$("#submit").on('click',function(event) {
		event.preventDefault();
		console.log(userInput);
	});
	
})

//$.getJSON(website, searchQ, callback);



//render function




	




