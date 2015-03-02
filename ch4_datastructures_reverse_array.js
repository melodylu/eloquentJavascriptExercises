// eloquentjavascript.net/04_data.html
//reverse array

/*
Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?
---> reverseArray is more useful; returns a new thing instead of breaking up an exisiting thing, will always give the same thing when you put something in.
*/





function reverseArray(array) {
  var reversedArray = [];
  for (var i = array.length; i > 0; i--) {
  reversedArray.push(array.pop());
  }
  return reversedArray;
};


function reverseArrayInPlace(array) {
  var back = 0;
  var front = 0;
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    back = array[array.length-1-i];
    front = array[i];
    array[i] = back;
    array[array.length-1-i] = front;
  };
  return array;
};


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
