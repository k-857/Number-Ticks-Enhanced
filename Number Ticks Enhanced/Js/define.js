
	
		var entry;	


		do {
			entry = prompt("Enter a whole number");
			entry = parseInt(entry);
			var startingNumber = entry;	
			if (isNaN(entry) ) {
				alert("Must be a whole number.");
			}
		}
		while ( isNaN(entry) );

		newNumber = startingNumber + 9;
		thirdNumber = newNumber*2;
		fourthNumber = thirdNumber-4;
		fifthNumber = fourthNumber/2;
		sixthNumber = fifthNumber-startingNumber;
		finalAnswer = sixthNumber;
