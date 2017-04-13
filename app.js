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
		
		$.getJSON(URL, query, function(data) {
			data.items.map(item => render(item));
		});
		
		// $("a").on("click", function(event) {
		// 	$(".modal").append();
		// })
	});
});


//render function
var render = function(data) {
	let videoURL = `${data.id.videoId}`;
	let videoTitle = `${data.snippet.title}`;
	let videoPic = `${data.snippet.thumbnails.medium.url}`;
	

	let template = `<p>${videoTitle}</p><a href="https://www.youtube.com/watch?v=${videoURL}"><img src="${videoPic}"></a>`;
																																//<video src="https://youtube.com/...."></video>
																																//<video controls> <source src="HCCCGoodFridayAppeal.mkv" alt="HCCC Appeal"> </video>
//	Create images without <a href>
//Click event on any image (event delegation)
//On click, remove image and replace with <video>
//Ergo may need to have the img inside a div, with click event on div
//<iframe width="560" height="315" src="https://www.youtube.com/embed/DlzxIy-ij4g" frameborder="0" allowfullscreen></iframe>

	$('#results').prepend(template);
};
//
//$('a').on('click', function(event) {
//	$('#container').html(`<iframe width="560" height="315" src="https://www.youtube.com/watch?v=${videoURL}" frameborder="0" allowfullscreen>`);
//});

//<video src="https://youtube.com/...."></video>
//<video controls> <source src="HCCCGoodFridayAppeal.mkv" alt="HCCC Appeal"> </video>
//Create images without <a href>
//Click event on any image (event delegation)
//On click, remove image and replace with <video>
//Ergo may need to have the img inside a div, with click event on div
//<iframe width="560" height="315" src="https://www.youtube.com/embed/DlzxIy-ij4g" frameborder="0" allowfullscreen></iframe>
//http://stackoverflow.com/questions/5157377/show-youtube-video-source-into-html5-video-tag

