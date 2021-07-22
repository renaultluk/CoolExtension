$(document).ready(function(){
	$("#confirm").on("click", function(){
		chrome.tabs.create({"url": "https://youtu.be/dQw4w9WgXcQ"});
	})
});