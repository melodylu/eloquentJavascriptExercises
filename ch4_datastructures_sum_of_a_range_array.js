// eloquentjavascript.net/04_data.html
//sum of a range
/* 
Exercises

The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/



function range(start, end, step) {
  // set up variables for everyone
  var theGoods = [start];
  var stepLocal = 1;

  // check to see if a step is given, and if it is, update stepLocal to new number
  // alternate: if (arguments.length > 2)
 if (arguments[2] !== undefined)
  stepLocal = step;
  else if (end < start)
    stepLocal = -1;
  else if (end === start)
    stepLocal = 0;
    

  // number of times we add a number to the array without overshooting 'end' 
  // push step+theGoods[i] * timesToFire to the theGoods[]
  for (var i = 0; i < (end - start)/stepLocal; i++) {
    var temp = theGoods[i]+stepLocal;
    theGoods.push(temp);
  };
  
  return theGoods;
};

function sum(array) {
  var myFriends = 0;
  for (var i = array.length; i > 0; i--) {
    myFriends = myFriends+array[i-1];
  };
  return myFriends;
};
var meAnd = [ 1, 2, 3 ];
console.log(sum(meAnd));
console.log(range(1,8));
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
console.log(range(5, 2));
console.log(range(5, 5));

/* returns:

6
[1, 2, 3, 4, 5, 6, 7, 8]
55
[5, 4, 3, 2]

*/
