// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	// Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	// Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;
	// Your code here
	let stringC = document.getElementById("resultNumber"); 

	if(stringA === "" || stringB === ""){
		alert("Por favor ingresa ambos valores"); 
		return; 
	}

	let nunA = parseInt(stringA);
	let nunB = parseInt(stringB); 

	if(isNaN(nunA) || isNaN(nunB)){
		alert("Por favor ingresa valores númericos válidos");
		return; 
	}
	
	stringC.value = nunA + nunB; 

};
