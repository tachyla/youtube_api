var apiKey = `AIzaSyC6etP4y8nUy8rrtaebr__ptKgZtXWxCdc`;
var URL = "https://www.googleapis.com/youtube/v3/search";


$(document).ready(function() {
	$("#submit").on('click',function(event) {
		let userInput = $("#searchbar");
		var result = userInput.val();				
		var query = {
			part: "snippet",	
			q: result,
			type: "video",
			key: apiKey,
		};
		//console.log(query);
		
		$.getJSON(URL, query, function(data) {
			console.log('API CB', data);
			//gData = data;
			console.log(data);
			//render(data);
		});
		
	});	
})

//$.getJSON(website, searchQ, callback);



//render function
var render = function(data) {
	let videoURL = `${data.items[0].id.videoId}`;
	let videoTitle = `${data.items[0].snippets.thumbnail.title}`;
	let videoPic = `${data.items[0].snippets.thumbnail.high.url}`;
	
	$('#container').append(videoPic);
	$('#container').append(videoTitle);
	$('#container').append(videoURL);
	$('#container').append(`This is where the videos gonna be`);
};


//search.list(snippet, q, type, apiKey);


