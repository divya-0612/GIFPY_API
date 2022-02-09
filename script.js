function sendApiRequest(){
	var userInput= document.getElementById("input").value
	console.log(userInput)

	var giphyApiKey="VSUPIsqz0Nb328XA3Bf6w9rBeIyaI3sa"
	var giphyApiURl="http://api.giphy.com/v1/gifs/search?q="+userInput+"+&api_key="+giphyApiKey+"&limit=30"

	fetch(giphyApiURl).then(function(data){
		return data.json()
	})
	.then(function(json){
		console.log(json.data[0].images.fixed_height.url)
		var imgPath=json.data[0].images.fixed_height.url
		var img=document.createElement("img")
		img.setAttribute("src",imgPath)
		document.body.appendChild(img)
	})
}
