let currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

// Modify this function
window.turnChanger = function turnChanger() {
	if (currentUser.toLowerCase() == "mario") {
		currentUser = "Juan";
	} else if(currentUser.toLowerCase() == "juan") {
		currentUser = "Josh";
	} else{
		currentUser = "Mario"
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
