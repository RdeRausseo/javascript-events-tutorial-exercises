window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

// The listener function here

function alertWoohoo(){
	alert("woohoo"); 
}
let buttonGreen = document.getElementById("theGreen");


buttonGreen.addEventListener('click', () => {
	alert("Woohoo"); 
})
