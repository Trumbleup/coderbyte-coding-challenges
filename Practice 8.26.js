// Using the JavaScript language, have the function LongestWord(sen) 
// take the sen parameter being passed
//  and return the largest word in the string. 
//  If there are two or more words that are the same length, 
//  return the first word from the string with that length. 
//  Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen) { 

  let array = sen.match(/[a-z0-9]+/gi); //matches words containing a-z and 0-9, checking all words and is case insensitive
  
  let sort = array.sort(function (a,b) {  //.sort will sort out the words, adding the function makes it sorted by length
      return b.length - a.length;
  });
    
  return sort[0]; //[0] is the first parameter in an array, which in this 
  				  //case is the longest word
         
}
   
// keep this function call here 
LongestWord(readline());                            



/////////

// Using the JavaScript language, have the function FirstFactorial(num) 
// take the num parameter being passed
//  and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). 
//  For the test cases, the range will be between 1 and 18 and the input will 
//  always be an integer.

function FirstFactorial(num) {

	var factorial = 1;

for (var i = 1; i <= num; i++){
	factorial = factorial * i;
}

return factorial;

}

FirstFactorial();

//

// Using the JavaScript language, have the function LetterChanges(str) 
// take the str parameter being passed and modify
//  it using the following algorithm. 
//  Replace every letter in the string with the letter following it in 
//  the alphabet (ie. c becomes d, z becomes a). 
//  Then capitalize every vowel in this new string (a, e, i, o, u) 
//  and finally return this modified string. 





function LetterChanges(str) { 

  var converted = str.replace(/[a-z]/gi, function(char){
      return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() +1 )
  });
  
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel){
      return vowel.toUpperCase();
  });
  
  return capitalized;
         
}
   
// keep this function call here 
LetterChanges(readline()); 


// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers
//  from 1 to num. For example: if the input is 4 then your program should return 10 
//  because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be 
//  any number from 1 to 1000.    

function SimpleAdding(num) { 

    let answer = 0;
    
    for (i = 1 ; i <= num; i++  ) {
       
        let answer = answer + i;
    }

  // code goes here  
  return answer; 
         
}
   
// keep this function call here 
SimpleAdding(readline());                            

// or

function SimpleAdding(num) { 

  return (num*(num+1))/2;
         
}

SimpleAdding(4);


// Using the JavaScript language, have the function LetterCapitalize(str) 
// take the str parameter being passed
//  and capitalize the first letter of each word. 
// Words will be separated by only one space.


function LetterCapitalize(str) { 
  
  // split the string into an array
  var words = str.split(" ");

  // we split the word into two parts and then combine the parts 
  // the first part is the first letter which we capitalize and the 
  // second part is the rest of the string
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }

  // return the array of words joined into a string
  return words.join(" ");
         
}
   
LetterCapitalize("hello world from coderbyte");  