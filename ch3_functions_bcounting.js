/*count Bs assignment: write a function to count 
the number of uppercase Bs in a word */

// verbose version of countBs 

function countBs (target) {
  var numberBs = 0;
  var read = 0;
  while (read < (target.length)) {
    	if (target.charAt(read) === "B") {
    		numberBs++;
  			read++;
   		}
   		 else {
    		read++;
   		} 
   }
   return numberBs;
}



//counts number of characters in target words
function countChar (targetWord, searchLetter) {
  var numberLetter = 0;
  var read = 0;
  while (read < targetWord.length) {
    if (targetWord.charAt(read) === searchLetter) {
      numberLetter++;
      read++;
    }
    else
      read++;
  }
  return numberLetter;
}

//uses countChar to count the number of "B" in a word
function countBs (unknownBs) {
  return countChar(unknownBs, "B")
}


console.log(countBs("BBC"));
// → 2

console.log(countChar("kakkerlak", "k"));
// → 4
