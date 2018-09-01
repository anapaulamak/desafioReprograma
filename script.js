function getResult(){
	var correctAnswers = 0;  
	for(var i = 1; i <= 3; i++) {
		var radios = document.getElementsByName('question'+ i);

		for(var j = 0; j < radios.length; j++) {	
	    var radio = radios[j];

	    if(radio.value == "1" && radio.checked) {
	      correctAnswers++;
	    }
  	}
	}

	alert("Você acertou " + correctAnswers + " pergunta(s) :)");
}