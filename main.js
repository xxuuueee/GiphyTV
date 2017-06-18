var url = "http://tv.giphy.com/v1/gifs/tv?api_key=CW27AW0nlp5u0&tag=giphytv";

createImage(url);

/*2. dO THE DATA STUFF WITH THE API*/



// AJAX Request
function createImage(url){
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function( e ) {
		var data = e.target.response; /* From the load function you want to drill down the contentyou want to grab, in this case the GIFS*/
		
		pushToDOM(data);


});
};


/*3. SHOW ME THE GIFS*/

function pushToDOM(input){
	var response = JSON.parse(input);



var imageUrls = response.data;


var container = document.querySelector("div");


	var src = imageUrls.image_original_url;
	console.log(src);

	container.innerHTML = "<img src = \"" + src + "\"  class = \"container-image \">";
	


};

setInterval(function(){ 
    createImage(url)    
	}, 12000);


	
		

		