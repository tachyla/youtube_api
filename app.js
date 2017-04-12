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
//			$.each(data => 
//						 	data.items.map(video => 
//								render(video)));	
			data.items.map(item => render(item));
		});
		// $("a").on("click", function(event) {
		// 	$(".modal").append();
		// })
	});
});


//render function
var render = function(data) {
	//console.log(data);
	let videoURL = `${data.id.videoId}`;
	let videoTitle = `${data.snippet.title}`;
	let videoPic = `${data.snippet.thumbnails.medium.url}`;
	

	let template = `<p>${videoTitle}</p>
				   <a href="https://www.youtube.com/watch?v=${videoURL}"><img src="${videoPic}"></a>`;
																																//<video src="https://youtube.com/...."></video>
																																//<video controls> <source src="HCCCGoodFridayAppeal.mkv" alt="HCCC Appeal"> </video>
//	Create images without <a href>
//Chris AngelicoChris Angelico06:14pm
//Click event on any image (event delegation)
//Chris AngelicoChris Angelico06:14pm
//On click, remove image and replace with <video>
//Chris AngelicoChris Angelico06:15pm
//Ergo may need to have the img inside a div, with click event on div
	//<iframe width="560" height="315" src="https://www.youtube.com/embed/DlzxIy-ij4g" frameborder="0" allowfullscreen></iframe>

	$('#container').append(template);
};


//search.list(snippet, q, type, apiKey);
//
//<video src="https://youtube.com/...."></video>
//Chris AngelicoChris Angelico06:11pm
//<video controls> <source src="HCCCGoodFridayAppeal.mkv" alt="HCCC Appeal"> </video>
//Chris AngelicoChris Angelico06:14pm
//Create images without <a href>
//Chris AngelicoChris Angelico06:14pm
//Click event on any image (event delegation)
//Chris AngelicoChris Angelico06:14pm
//On click, remove image and replace with <video>
//Chris AngelicoChris Angelico06:15pm
//Ergo may need to have the img inside a div, with click event on div
//Chris AngelicoChris Angelico06:15pm
//<iframe width="560" height="315" src="https://www.youtube.com/embed/DlzxIy-ij4g" frameborder="0" allowfullscreen></iframe>
//Chris AngelicoChris Angelico06:16pm
//http://stackoverflow.com/questions/5157377/show-youtube-video-source-into-html5-video-tag

