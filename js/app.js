$(document).ready(function() {

	$(document).on("keydown", function(event) {
		
		// If user presses enter, FizzBuzz app runs
		if(event.keyCode == 13) {
			console.log("Starting FizzBuzz...");

			// FizzBuzz For Loop spitting out numbers from 1 to 100
			for (var i = 1; i <=100; i++) {

				var FizzNum = i + "<br>";

				// Evaluates number to see if it is divisible by 3 and 5
				if( i%3 == 0 && i%5 == 0) {
					$("body").append("Fizz Buzz <br>");	
				}

				// Else evaluates number to see if it is divisible by 3
				else if (i%3 == 0) {
					$("body").append("Fizz <br>");
				}

				// Else evaluates number to see if it is divisible by 5
				else if (i%5 == 0) {
					$("body").append("Buzz <br>");
				}

				// Else simply prints the number itself
				else {
					$("body").append(FizzNum);		
				}
				
			}
		}
	});
});