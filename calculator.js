let inputOne = '';
let inputTwo = '';
let operation = null;
let result = null;
let display= document.getElementById("display");

const getNumber=number => {
	console.log(number);
	if (!operation && !result ){
		value=inputOne += number;
		//display.value=inputOne;
	}else if (operation && !result){
		value= inputTwo + number;
		//display.value = inputTwo;

	}else if (result && operation){
		inputOne= result;
		inputTwo ="";
		value = inputTwo+=number;
		
	}
	return display.value=value;

};

	const getOperation = op => {
		console.log(op);
//set operation 
	operation = op
	
	};

	const getResult = () => {
		console.log(inputOne,inputTwo,result,operation);
		//perform task
		switch(operation){
			case "addButton": return(display.value = result= parseInt(inputOne)+ parseInt(inputTwo))
			case "substractButton": return(display.value = result= parseInt(inputOne)- parseInt(inputTwo))
			case "multiplyButton": return(display.value = result= parseInt(inputOne)* parseInt(inputTwo))
			case "divideButton": return(display.value = result= parseInt(inputOne)/ parseInt(inputTwo))
			default:return null;
		}

	};

	const resetAll = () => {
		//set everything their initial values
		inputOne = '';
		inputTwo = '';
	    operation = null;
        result = null;
        display.value = ''

	};