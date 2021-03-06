//FizzBuzz, a classic
http://eloquentjavascript.net/02_program_structure.html

/* FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

function fizzBuzz() {
 	var theWord = "";
  for (var count = 1; count <= 100; count++) {
    if (count%3 === 0)
      theWord += "Fizz";
    if (count%5 === 0) 
      theWord += "Buzz";
    console.log(theWord || count);
    theWord = "";
   };
};

fizzBuzz();


//Chess board
/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

var chessBoard = "";
var grid = 8;
var black = 0;
var white = 0;

for (var lines = grid; lines !== 0; lines--){
	for (var spaces = grid; spaces !== 0; spaces--){

	if ((black+white) % 2 === 0){
		chessBoard = chessBoard +"#";
		white++;
	}
	else {
		chessBoard = chessBoard + "_";
		white++;
	}
};
chessBoard = chessBoard + "\n";
black++;
	}

console.log(chessBoard);
