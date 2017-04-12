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
			//console.log('API CB', data);
			//gData = data;
			//console.log(data);
			render(data);
		});
		
	});	
})

//$.getJSON(website, searchQ, callback);



//render function
var render = function(data) {
	let videoURL = `${data.items[0].id.videoId}`;
	let videoTitle = `${data.items[0].snippet.title}`;
	let videoPic = `${data.items[0].snippet.thumbnails.high.url}`;
	

	let template = `<p>${videoTitle}</p>
				   <a href="https://www.youtube.com/watch?v=${videoURL}"><img src="${videoPic}"></a>`;

	$('#container').append(template);
};


//search.list(snippet, q, type, apiKey);


