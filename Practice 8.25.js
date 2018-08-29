// Make a reverse string

const firstReverse = (str) => {
	let newString = "";

	for (let i = str.length - 1; i >= 0; i--) {
		newString = newString + str.charAt(i); // charAT() is a function that identifies the character in it's place on the index.
	}


return newString;

}

firstReverse(readline()); //readline() is a built in function for Coderbyte


// OR

const firstReverse = (str) => {
	str.split('').reverse().join('');

}

firstReverse(readline());


//


const reverseString = (str) => {
	let newArray = "";

	for (i = str.length - 1; i >= 0; i-- ) {

		newArray = newArray + str.charAt(i);
	}
 return newArray
}

console.log(reverseString(`Let's learn coding so I can leave`));

//

//Challenge two

//Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed 
//and return the factorial of it 
//(e.g. if num = 4, return (4 * 3 * 2 * 1)). 
//For the test cases, the range will be between 1 and 18 
//and the input will always be an integer.

 
function FirstFactorial(num) {

	var factorial = 1;

for (var i = 1; i <= num; i++){
	factorial = factorial * i;
}

return factorial;

}

FirstFactorial();